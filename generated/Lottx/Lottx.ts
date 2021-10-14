// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class LotteryClose extends ethereum.Event {
  get params(): LotteryClose__Params {
    return new LotteryClose__Params(this);
  }
}

export class LotteryClose__Params {
  _event: LotteryClose;

  constructor(event: LotteryClose) {
    this._event = event;
  }

  get lotteryId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get ticketSupply(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class LotteryNumberDrawn extends ethereum.Event {
  get params(): LotteryNumberDrawn__Params {
    return new LotteryNumberDrawn__Params(this);
  }
}

export class LotteryNumberDrawn__Params {
  _event: LotteryNumberDrawn;

  constructor(event: LotteryNumberDrawn) {
    this._event = event;
  }

  get lotteryId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get finalNumber(): Array<i32> {
    return this._event.parameters[1].value.toI32Array();
  }
}

export class LotteryOpen extends ethereum.Event {
  get params(): LotteryOpen__Params {
    return new LotteryOpen__Params(this);
  }
}

export class LotteryOpen__Params {
  _event: LotteryOpen;

  constructor(event: LotteryOpen) {
    this._event = event;
  }

  get lotteryId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get ticketSupply(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get startTime(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get endTime(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get costPerTicket(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get prizeDistribution(): Array<i32> {
    return this._event.parameters[5].value.toI32Array();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RequestNumbers extends ethereum.Event {
  get params(): RequestNumbers__Params {
    return new RequestNumbers__Params(this);
  }
}

export class RequestNumbers__Params {
  _event: RequestNumbers;

  constructor(event: RequestNumbers) {
    this._event = event;
  }

  get lotteryId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get requestId(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class TicketsClaim extends ethereum.Event {
  get params(): TicketsClaim__Params {
    return new TicketsClaim__Params(this);
  }
}

export class TicketsClaim__Params {
  _event: TicketsClaim;

  constructor(event: TicketsClaim) {
    this._event = event;
  }

  get claimer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get lotteryId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get numberTickets(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TicketsPurchase extends ethereum.Event {
  get params(): TicketsPurchase__Params {
    return new TicketsPurchase__Params(this);
  }
}

export class TicketsPurchase__Params {
  _event: TicketsPurchase;

  constructor(event: TicketsPurchase) {
    this._event = event;
  }

  get lotteryId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get numberTickets(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get buyer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ticketIDs(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get numbers(): Array<i32> {
    return this._event.parameters[4].value.toI32Array();
  }

  get totalCost(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class UpdatedMaxRange extends ethereum.Event {
  get params(): UpdatedMaxRange__Params {
    return new UpdatedMaxRange__Params(this);
  }
}

export class UpdatedMaxRange__Params {
  _event: UpdatedMaxRange;

  constructor(event: UpdatedMaxRange) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newMaxRange(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class UpdatedSizeOfLottery extends ethereum.Event {
  get params(): UpdatedSizeOfLottery__Params {
    return new UpdatedSizeOfLottery__Params(this);
  }
}

export class UpdatedSizeOfLottery__Params {
  _event: UpdatedSizeOfLottery;

  constructor(event: UpdatedSizeOfLottery) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newLotterySize(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class Lottx__getBasicLottoInfoResultValue0Struct extends ethereum.Tuple {
  get lotteryId(): BigInt {
    return this[0].toBigInt();
  }

  get lotteryStatus(): i32 {
    return this[1].toI32();
  }

  get totalPrize(): BigInt {
    return this[2].toBigInt();
  }

  get costPerTicket(): BigInt {
    return this[3].toBigInt();
  }

  get startTimestamp(): BigInt {
    return this[4].toBigInt();
  }

  get closedTimestamp(): BigInt {
    return this[5].toBigInt();
  }

  get prizeDistribution(): Array<i32> {
    return this[6].toI32Array();
  }

  get luckyNumbers(): Array<i32> {
    return this[7].toI32Array();
  }
}

export class Lottx extends ethereum.SmartContract {
  static bind(address: Address): Lottx {
    return new Lottx("Lottx", address);
  }

  createNewLott(
    _prizeDistribution: Array<i32>,
    _totalPrize: BigInt,
    _costPerTicket: BigInt,
    _startingTimestamp: BigInt,
    _closingTimestamp: BigInt
  ): BigInt {
    let result = super.call(
      "createNewLott",
      "createNewLott(uint8[],uint256,uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromI32Array(_prizeDistribution),
        ethereum.Value.fromUnsignedBigInt(_totalPrize),
        ethereum.Value.fromUnsignedBigInt(_costPerTicket),
        ethereum.Value.fromUnsignedBigInt(_startingTimestamp),
        ethereum.Value.fromUnsignedBigInt(_closingTimestamp)
      ]
    );

    return result[0].toBigInt();
  }

  try_createNewLott(
    _prizeDistribution: Array<i32>,
    _totalPrize: BigInt,
    _costPerTicket: BigInt,
    _startingTimestamp: BigInt,
    _closingTimestamp: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createNewLott",
      "createNewLott(uint8[],uint256,uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromI32Array(_prizeDistribution),
        ethereum.Value.fromUnsignedBigInt(_totalPrize),
        ethereum.Value.fromUnsignedBigInt(_costPerTicket),
        ethereum.Value.fromUnsignedBigInt(_startingTimestamp),
        ethereum.Value.fromUnsignedBigInt(_closingTimestamp)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getBasicLottoInfo(
    _lotteryId: BigInt
  ): Lottx__getBasicLottoInfoResultValue0Struct {
    let result = super.call(
      "getBasicLottoInfo",
      "getBasicLottoInfo(uint256):((uint256,uint8,uint256,uint256,uint256,uint256,uint8[],uint16[]))",
      [ethereum.Value.fromUnsignedBigInt(_lotteryId)]
    );

    return result[0].toTuple() as Lottx__getBasicLottoInfoResultValue0Struct;
  }

  try_getBasicLottoInfo(
    _lotteryId: BigInt
  ): ethereum.CallResult<Lottx__getBasicLottoInfoResultValue0Struct> {
    let result = super.tryCall(
      "getBasicLottoInfo",
      "getBasicLottoInfo(uint256):((uint256,uint8,uint256,uint256,uint256,uint256,uint8[],uint16[]))",
      [ethereum.Value.fromUnsignedBigInt(_lotteryId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as Lottx__getBasicLottoInfoResultValue0Struct
    );
  }

  getCurrentTime(): BigInt {
    let result = super.call("getCurrentTime", "getCurrentTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getCurrentTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCurrentTime",
      "getCurrentTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getMaxRange(): i32 {
    let result = super.call("getMaxRange", "getMaxRange():(uint16)", []);

    return result[0].toI32();
  }

  try_getMaxRange(): ethereum.CallResult<i32> {
    let result = super.tryCall("getMaxRange", "getMaxRange():(uint16)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  maxNumberTicketsPerBatch(): i32 {
    let result = super.call(
      "maxNumberTicketsPerBatch",
      "maxNumberTicketsPerBatch():(uint8)",
      []
    );

    return result[0].toI32();
  }

  try_maxNumberTicketsPerBatch(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "maxNumberTicketsPerBatch",
      "maxNumberTicketsPerBatch():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  maxValidRange(): i32 {
    let result = super.call("maxValidRange", "maxValidRange():(uint16)", []);

    return result[0].toI32();
  }

  try_maxValidRange(): ethereum.CallResult<i32> {
    let result = super.tryCall("maxValidRange", "maxValidRange():(uint16)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  sizeOfLotteryNubers(): i32 {
    let result = super.call(
      "sizeOfLotteryNubers",
      "sizeOfLotteryNubers():(uint8)",
      []
    );

    return result[0].toI32();
  }

  try_sizeOfLotteryNubers(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "sizeOfLotteryNubers",
      "sizeOfLotteryNubers():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  ticketsCost(_lotteryId: BigInt, _numberOfTickets: BigInt): BigInt {
    let result = super.call(
      "ticketsCost",
      "ticketsCost(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_lotteryId),
        ethereum.Value.fromUnsignedBigInt(_numberOfTickets)
      ]
    );

    return result[0].toBigInt();
  }

  try_ticketsCost(
    _lotteryId: BigInt,
    _numberOfTickets: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ticketsCost",
      "ticketsCost(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_lotteryId),
        ethereum.Value.fromUnsignedBigInt(_numberOfTickets)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  timerAddress(): Address {
    let result = super.call("timerAddress", "timerAddress():(address)", []);

    return result[0].toAddress();
  }

  try_timerAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("timerAddress", "timerAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _usdt(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _timer(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _sizeOfLotteryNubers(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get _maxValidRange(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get _maxNumberTicketsPerBatch(): i32 {
    return this._call.inputValues[4].value.toI32();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BatchClaimRewardsCall extends ethereum.Call {
  get inputs(): BatchClaimRewardsCall__Inputs {
    return new BatchClaimRewardsCall__Inputs(this);
  }

  get outputs(): BatchClaimRewardsCall__Outputs {
    return new BatchClaimRewardsCall__Outputs(this);
  }
}

export class BatchClaimRewardsCall__Inputs {
  _call: BatchClaimRewardsCall;

  constructor(call: BatchClaimRewardsCall) {
    this._call = call;
  }

  get _lotteryId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _tokeIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class BatchClaimRewardsCall__Outputs {
  _call: BatchClaimRewardsCall;

  constructor(call: BatchClaimRewardsCall) {
    this._call = call;
  }
}

export class BuyLottTicketsCall extends ethereum.Call {
  get inputs(): BuyLottTicketsCall__Inputs {
    return new BuyLottTicketsCall__Inputs(this);
  }

  get outputs(): BuyLottTicketsCall__Outputs {
    return new BuyLottTicketsCall__Outputs(this);
  }
}

export class BuyLottTicketsCall__Inputs {
  _call: BuyLottTicketsCall;

  constructor(call: BuyLottTicketsCall) {
    this._call = call;
  }

  get _lotteryId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _numberOfTickets(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get _chosenNumbers(): Array<i32> {
    return this._call.inputValues[2].value.toI32Array();
  }
}

export class BuyLottTicketsCall__Outputs {
  _call: BuyLottTicketsCall;

  constructor(call: BuyLottTicketsCall) {
    this._call = call;
  }
}

export class ClaimRewardCall extends ethereum.Call {
  get inputs(): ClaimRewardCall__Inputs {
    return new ClaimRewardCall__Inputs(this);
  }

  get outputs(): ClaimRewardCall__Outputs {
    return new ClaimRewardCall__Outputs(this);
  }
}

export class ClaimRewardCall__Inputs {
  _call: ClaimRewardCall;

  constructor(call: ClaimRewardCall) {
    this._call = call;
  }

  get _lotteryId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ClaimRewardCall__Outputs {
  _call: ClaimRewardCall;

  constructor(call: ClaimRewardCall) {
    this._call = call;
  }
}

export class CreateLuckyNumbersCall extends ethereum.Call {
  get inputs(): CreateLuckyNumbersCall__Inputs {
    return new CreateLuckyNumbersCall__Inputs(this);
  }

  get outputs(): CreateLuckyNumbersCall__Outputs {
    return new CreateLuckyNumbersCall__Outputs(this);
  }
}

export class CreateLuckyNumbersCall__Inputs {
  _call: CreateLuckyNumbersCall;

  constructor(call: CreateLuckyNumbersCall) {
    this._call = call;
  }

  get _lotteryId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CreateLuckyNumbersCall__Outputs {
  _call: CreateLuckyNumbersCall;

  constructor(call: CreateLuckyNumbersCall) {
    this._call = call;
  }
}

export class CreateNewLottCall extends ethereum.Call {
  get inputs(): CreateNewLottCall__Inputs {
    return new CreateNewLottCall__Inputs(this);
  }

  get outputs(): CreateNewLottCall__Outputs {
    return new CreateNewLottCall__Outputs(this);
  }
}

export class CreateNewLottCall__Inputs {
  _call: CreateNewLottCall;

  constructor(call: CreateNewLottCall) {
    this._call = call;
  }

  get _prizeDistribution(): Array<i32> {
    return this._call.inputValues[0].value.toI32Array();
  }

  get _totalPrize(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _costPerTicket(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _startingTimestamp(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _closingTimestamp(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class CreateNewLottCall__Outputs {
  _call: CreateNewLottCall;

  constructor(call: CreateNewLottCall) {
    this._call = call;
  }

  get _lotteryId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _nft(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _IRandomNumberGenerator(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class NumbersDrawnCall extends ethereum.Call {
  get inputs(): NumbersDrawnCall__Inputs {
    return new NumbersDrawnCall__Inputs(this);
  }

  get outputs(): NumbersDrawnCall__Outputs {
    return new NumbersDrawnCall__Outputs(this);
  }
}

export class NumbersDrawnCall__Inputs {
  _call: NumbersDrawnCall;

  constructor(call: NumbersDrawnCall) {
    this._call = call;
  }

  get _lotteryId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _requestId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _randomNumber(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class NumbersDrawnCall__Outputs {
  _call: NumbersDrawnCall;

  constructor(call: NumbersDrawnCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetCurrentTimeCall extends ethereum.Call {
  get inputs(): SetCurrentTimeCall__Inputs {
    return new SetCurrentTimeCall__Inputs(this);
  }

  get outputs(): SetCurrentTimeCall__Outputs {
    return new SetCurrentTimeCall__Outputs(this);
  }
}

export class SetCurrentTimeCall__Inputs {
  _call: SetCurrentTimeCall;

  constructor(call: SetCurrentTimeCall) {
    this._call = call;
  }

  get time(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetCurrentTimeCall__Outputs {
  _call: SetCurrentTimeCall;

  constructor(call: SetCurrentTimeCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateMaxRangeCall extends ethereum.Call {
  get inputs(): UpdateMaxRangeCall__Inputs {
    return new UpdateMaxRangeCall__Inputs(this);
  }

  get outputs(): UpdateMaxRangeCall__Outputs {
    return new UpdateMaxRangeCall__Outputs(this);
  }
}

export class UpdateMaxRangeCall__Inputs {
  _call: UpdateMaxRangeCall;

  constructor(call: UpdateMaxRangeCall) {
    this._call = call;
  }

  get _newMaxRange(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class UpdateMaxRangeCall__Outputs {
  _call: UpdateMaxRangeCall;

  constructor(call: UpdateMaxRangeCall) {
    this._call = call;
  }
}

export class UpdateSizeOfLotteryCall extends ethereum.Call {
  get inputs(): UpdateSizeOfLotteryCall__Inputs {
    return new UpdateSizeOfLotteryCall__Inputs(this);
  }

  get outputs(): UpdateSizeOfLotteryCall__Outputs {
    return new UpdateSizeOfLotteryCall__Outputs(this);
  }
}

export class UpdateSizeOfLotteryCall__Inputs {
  _call: UpdateSizeOfLotteryCall;

  constructor(call: UpdateSizeOfLotteryCall) {
    this._call = call;
  }

  get _newSize(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class UpdateSizeOfLotteryCall__Outputs {
  _call: UpdateSizeOfLotteryCall;

  constructor(call: UpdateSizeOfLotteryCall) {
    this._call = call;
  }
}