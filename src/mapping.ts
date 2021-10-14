/* eslint-disable prefer-const */
import { BigDecimal, BigInt, Bytes, log } from "@graphprotocol/graph-ts";
import { concat } from "@graphprotocol/graph-ts/helper-functions";
import { Lottx, Round, User } from ".././generated/schema";
import {
  LotteryClose,
  LotteryOpen,
  LotteryNumberDrawn,
  TicketsPurchase,
  TicketsClaim
} from ".././generated/Lottx/Lottx";
import { toBigDecimal } from "./utils";

let ZERO_BI = BigInt.fromI32(0);
let ONE_BI = BigInt.fromI32(1);
let ZERO_BD = BigDecimal.fromString("0");

export function handleLotteryOpen(event: LotteryOpen): void {
  let lottery = new Lottx(event.params.lotteryId.toString());
  lottery.totalUsers = ZERO_BI;
  lottery.totalTickets = ZERO_BI;
  lottery.status = "Open";
  lottery.startTime = event.params.startTime;
  lottery.endTime = event.params.endTime;
  lottery.ticketPrice = toBigDecimal(event.params.costPerTicket);
  lottery.block = event.block.number;
  lottery.timestamp = event.block.timestamp;
  lottery.prizeDistribution = event.params.prizeDistribution;
  lottery.save();
}

export function handleLotteryClose(event: LotteryClose): void {
  let lottery = new Lottx(event.params.lotteryId.toString());
  if (lottery !== null) {
    lottery.status = "Close";
    lottery.save();
  }
}

export function handleLotteryNumberDrawn(event: LotteryNumberDrawn): void {
  let lottery = new Lottx(event.params.lotteryId.toString());
  if (lottery !== null) {
    lottery.status = "Claimable";
    lottery.finalNumber = event.params.finalNumber;
    // lottery.winningTickets = event.params.countWinningTickets;
    lottery.claimedTickets = ZERO_BI;
    lottery.save();
  }
}

export function handleTicketsPurchase(event: TicketsPurchase): void {
  let lottery = Lottx.load(event.params.lotteryId.toString());
  if (lottery === null) {
    log.warning("Trying to purchase tickets for an unknown lottery - #{}", [event.params.lotteryId.toString()]);
    return;
  }
  // lottery.totalUsers = lottery.totalUsers.plus(ONE_BI);
  lottery.totalTickets = lottery.totalTickets.plus(BigInt.fromI32(event.params.numberTickets));

  let user = User.load(event.params.buyer.toHex());
  if (user === null) {
    user = new User(event.params.buyer.toHex());
    user.totalRounds = ZERO_BI;
    user.totalTickets = ZERO_BI;
    user.totalUsdtCosts = ZERO_BD;
    user.block = event.block.number;
    user.timestamp = event.block.timestamp;
    lottery.totalUsers = lottery.totalUsers.plus(ONE_BI);
  }

  user.totalTickets = user.totalTickets.plus(BigInt.fromI32(event.params.numberTickets));
  user.totalUsdtCosts = user.totalUsdtCosts.plus(
    toBigDecimal(
      BigInt.fromI32(event.params.numberTickets)
    ).times(lottery.ticketPrice));


  let roundId = concat(
    Bytes.fromHexString(event.params.buyer.toHex()), Bytes.fromUTF8(event.params.lotteryId.toString())
  ).toHex();
  let round = Round.load(roundId);
  if (round === null) {
    round = new Round(roundId);
    round.lottx = event.params.lotteryId.toString();
    round.user = event.params.buyer.toHex();
    round.totalTickets = ZERO_BI;
    round.block = event.block.number;
    round.timestamp = event.block.timestamp;
    user.totalRounds = user.totalRounds.plus(ONE_BI);
  }
  round.totalTickets = round.totalTickets.plus(
    BigInt.fromI32(event.params.numberTickets)
  );

  if (round.ticketsNumbers &&
    round.ticketsNumbers.length > 0 &&
    event.params.numbers &&
    event.params.numbers.length > 0
  ) {
    round.ticketsNumbers = round.ticketsNumbers.concat(event.params.numbers);
  } else {
    round.ticketsNumbers = event.params.numbers;
  }

  lottery.save();
  user.save();
  round.save();
}

export function handleTicketsClaim(event: TicketsClaim): void {
  let lottery = Lottx.load(event.params.lotteryId.toString());
  if (lottery === null) {
    log.warning("Trying to claim tickets for an unknown lottery - #{}", [event.params.lotteryId.toString()]);
    return;
  }
  lottery.claimedTickets = lottery.claimedTickets.plus(event.params.numberTickets);
  lottery.save();

  let user = User.load(event.params.claimer.toHex());
  if (user === null) {
    user = new User(event.params.claimer.toHex());
    user.totalRounds = ZERO_BI;
    user.totalTickets = ZERO_BI;
    user.totalUsdtCosts = ZERO_BD;
    user.block = event.block.number;
    user.timestamp = event.block.timestamp;
  }

  let roundId = concat(
    Bytes.fromHexString(event.params.claimer.toHex()),
    Bytes.fromUTF8(event.params.lotteryId.toString())
  ).toHex();
  let round = Round.load(roundId);
  if (round === null) {
    round.lottx = event.params.lotteryId.toString();
    round.user = event.params.claimer.toHex();
    round.totalTickets = ZERO_BI;
    round.block = event.block.number;
    round.timestamp = event.block.timestamp;
    user.totalRounds = user.totalRounds.plus(ONE_BI);
  }

  round.claimed = true;
  user.save();
  round.save();
}

