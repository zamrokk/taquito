import BigNumber from 'bignumber.js';
import { OpKind } from './opkind';

export type BalanceResponse = BigNumber;
export type StorageResponse = ScriptedContracts['storage'];
export type ScriptResponse = ScriptedContracts;
export type BigMapGetResponse = MichelsonV1Expression;
export type ManagerResponse = { manager: string };
export type ManagerKeyResponse = string | { key: string };
export type DelegateResponse = string | null;

export type OperationHash = string;

export interface DelegatesResponse {
  balance?: BigNumber;
  full_balance?: BigNumber;
  current_frozen_deposits?: BigNumber;
  frozen_deposits?: BigNumber;
  frozen_balance?: BigNumber;
  frozen_balance_by_cycle?: Frozenbalancebycycle[];
  frozen_deposits_limit?: BigNumber;
  staking_balance: BigNumber;
  delegated_contracts: string[];
  delegated_balance: BigNumber;
  deactivated: boolean;
  grace_period: number;
  voting_power?: number;
}

interface Frozenbalancebycycle {
  cycle: number;
  deposit?: BigNumber;
  deposits?: BigNumber; // Since Granada, "deposit" is replaced by "deposits"
  fees: BigNumber;
  rewards: BigNumber;
}

export type BigMapKey = {
  key: { [key: string]: string | object[] };
  type: { prim: string; args?: object[] };
};

export interface BlockFullHeader {
  level: number;
  proto: number;
  predecessor: string;
  timestamp: TimeStampMixed;
  validation_pass: number;
  operations_hash: string;
  fitness: string[];
  context: string;
  payload_hash?: string;
  payload_round?: number;
  priority: number;
  proof_of_work_nonce: string;
  seed_nonce_hash?: string;
  liquidity_baking_escape_vote?: boolean;
  signature: string;
}

export type InlinedEndorsementKindEnum = OpKind.ENDORSEMENT;

export interface InlinedEndorsementContents {
  kind: InlinedEndorsementKindEnum;
  slot?: number;
  round?: number;
  block_payload_hash?: string;
  level: number;
}

export interface InlinedPreEndorsementContents {
  kind: OpKind.PREENDORSEMENT;
  slot: number;
  level: number;
  round: number;
  block_payload_hash: string;
}

export interface InlinedEndorsement {
  branch: string;
  operations: InlinedEndorsementContents;
  signature?: string;
}

export interface InlinedPreEndorsement {
  branch: string;
  operations: InlinedPreEndorsementContents;
  signature?: string;
}

export type OperationContentsBallotEnum = 'nay' | 'yay' | 'pass';

export interface OperationContentsEndorsement {
  kind: OpKind.ENDORSEMENT;
  level: number;
  slot?: number;
  round?: number;
  block_payload_hash?: string;
}

export interface OperationContentsPreEndorsement {
  kind: OpKind.PREENDORSEMENT;
  slot: number;
  level: number;
  round: number;
  block_payload_hash: string;
}

export interface OperationContentsDoublePreEndorsement {
  kind: OpKind.DOUBLE_PREENDORSEMENT_EVIDENCE;
  op1: InlinedPreEndorsement;
  op2: InlinedPreEndorsement;
}

export interface OperationContentsSetDepositsLimit {
  kind: OpKind.SET_DEPOSITS_LIMIT;
  source: string;
  fee: string;
  counter: string;
  gas_limit: string;
  storage_limit: string;
  limit?: string;
}

export interface OperationContentsEndorsementWithSlot {
  kind: OpKind.ENDORSEMENT_WITH_SLOT;
  endorsement: InlinedEndorsement;
  slot: number;
}

export interface OperationContentsFailingNoop {
  kind: OpKind.FAILING_NOOP;
  arbitrary: string;
}

export interface OperationContentsRevelation {
  kind: OpKind.SEED_NONCE_REVELATION;
  level: number;
  nonce: string;
}

export interface OperationContentsDoubleEndorsement {
  kind: OpKind.DOUBLE_ENDORSEMENT_EVIDENCE;
  op1: InlinedEndorsement;
  op2: InlinedEndorsement;
  slot?: number;
}

export interface OperationContentsDoubleBaking {
  kind: OpKind.DOUBLE_BAKING_EVIDENCE;
  bh1: BlockFullHeader;
  bh2: BlockFullHeader;
}

export interface OperationContentsActivateAccount {
  kind: OpKind.ACTIVATION;
  pkh: string;
  secret: string;
}

export interface OperationContentsProposals {
  kind: OpKind.PROPOSALS;
  source: string;
  period: number;
  proposals: string[];
}

export interface OperationContentsBallot {
  kind: OpKind.BALLOT;
  source: string;
  period: number;
  proposal: string;
  ballot: OperationContentsBallotEnum;
}

export interface OperationContentsReveal {
  kind: OpKind.REVEAL;
  source: string;
  fee: string;
  counter: string;
  gas_limit: string;
  storage_limit: string;
  public_key: string;
}

export interface OperationContentsTransaction {
  kind: OpKind.TRANSACTION;
  source: string;
  fee: string;
  counter: string;
  gas_limit: string;
  storage_limit: string;
  amount: string;
  destination: string;
  parameters?: TransactionOperationParameter;
}

export interface OperationContentsOrigination {
  kind: OpKind.ORIGINATION;
  source: string;
  fee: string;
  counter: string;
  gas_limit: string;
  storage_limit: string;
  balance: string;
  delegate?: string;
  script?: ScriptedContracts;
}

export interface OperationContentsDelegation {
  kind: OpKind.DELEGATION;
  source: string;
  fee: string;
  counter: string;
  gas_limit: string;
  storage_limit: string;
  delegate?: string;
}

export interface OperationContentsRegisterGlobalConstant {
  kind: OpKind.REGISTER_GLOBAL_CONSTANT;
  source: string;
  fee: string;
  counter: string;
  gas_limit: string;
  storage_limit: string;
  value: MichelsonV1Expression;
}

export type OperationContents =
  | OperationContentsEndorsement
  | OperationContentsPreEndorsement
  | OperationContentsDoublePreEndorsement
  | OperationContentsRevelation
  | OperationContentsDoubleEndorsement
  | OperationContentsDoubleBaking
  | OperationContentsActivateAccount
  | OperationContentsProposals
  | OperationContentsBallot
  | OperationContentsReveal
  | OperationContentsTransaction
  | OperationContentsOrigination
  | OperationContentsDelegation
  | OperationContentsEndorsementWithSlot
  | OperationContentsFailingNoop
  | OperationContentsRegisterGlobalConstant
  | OperationContentsSetDepositsLimit;

export interface OperationContentsAndResultMetadataExtended {
  balance_updates: OperationMetadataBalanceUpdates[];
  delegate: string;
  slots?: number[];
  endorsement_power?: number;
}

export interface OperationContentsAndResultMetadataPreEndorsement {
  balance_updates: OperationMetadataBalanceUpdates[];
  delegate: string;
  preendorsement_power: number;
}

export interface OperationContentsAndResultMetadataReveal {
  balance_updates: OperationMetadataBalanceUpdates[];
  operation_result: OperationResultReveal;
  internal_operation_results?: InternalOperationResult[];
}

export interface OperationContentsAndResultMetadataTransaction {
  balance_updates: OperationMetadataBalanceUpdates[];
  operation_result: OperationResultTransaction;
  internal_operation_results?: InternalOperationResult[];
}

export interface OperationContentsAndResultMetadataDelegation {
  balance_updates: OperationMetadataBalanceUpdates[];
  operation_result: OperationResultDelegation;
  internal_operation_results?: InternalOperationResult[];
}

export interface OperationContentsAndResultMetadataRegisterGlobalConstant {
  balance_updates: OperationMetadataBalanceUpdates[];
  operation_result: OperationResultRegisterGlobalConstant;
  internal_operation_results?: InternalOperationResult[];
}

export interface OperationContentsAndResultMetadataSetDepositsLimit {
  balance_updates: OperationMetadataBalanceUpdates[];
  operation_result: OperationResultSetDepositsLimit;
  internal_operation_results?: InternalOperationResult[];
}

export interface OperationContentsAndResultMetadata {
  balance_updates: OperationMetadataBalanceUpdates[];
}

export interface OperationContentsAndResultEndorsement {
  kind: OpKind.ENDORSEMENT;
  block_payload_hash?: string;
  level: number;
  round?: number;
  slot?: number;
  metadata: OperationContentsAndResultMetadataExtended;
}

export interface OperationContentsAndResultPreEndorsement {
  kind: OpKind.PREENDORSEMENT;
  slot: number;
  level: number;
  round: number;
  block_payload_hash: string;
  metadata: OperationContentsAndResultMetadataPreEndorsement;
}

export interface OperationContentsAndResultDoublePreEndorsement {
  kind: OpKind.DOUBLE_PREENDORSEMENT_EVIDENCE;
  op1: InlinedPreEndorsement;
  op2: InlinedPreEndorsement;
  metadata: OperationContentsAndResultMetadata;
}
export interface OperationContentsAndResultEndorsementWithSlot {
  kind: OpKind.ENDORSEMENT_WITH_SLOT;
  endorsement: InlinedEndorsement;
  slot: number;
  metadata: OperationContentsAndResultMetadataExtended;
}

export interface OperationContentsAndResultRevelation {
  kind: OpKind.SEED_NONCE_REVELATION;
  level: number;
  nonce: string;
  metadata: OperationContentsAndResultMetadata;
}

export interface OperationContentsAndResultDoubleEndorsement {
  kind: OpKind.DOUBLE_ENDORSEMENT_EVIDENCE;
  op1: InlinedEndorsement;
  op2: InlinedEndorsement;
  slot?: number;
  metadata: OperationContentsAndResultMetadata;
}

export interface OperationContentsAndResultDoubleBaking {
  kind: OpKind.DOUBLE_BAKING_EVIDENCE;
  bh1: BlockFullHeader;
  bh2: BlockFullHeader;
  metadata: OperationContentsAndResultMetadata;
}

export interface OperationContentsAndResultActivateAccount {
  kind: OpKind.ACTIVATION;
  pkh: string;
  secret: string;
  metadata: OperationContentsAndResultMetadata;
}

export interface OperationContentsAndResultProposals {
  kind: OpKind.PROPOSALS;
  source: string;
  period: number;
  proposals: string[];
}

export interface OperationContentsAndResultBallot {
  kind: OpKind.BALLOT;
  source: string;
  period: number;
  proposal: string;
  ballot: OperationContentsBallotEnum;
}

export interface OperationContentsAndResultReveal {
  kind: OpKind.REVEAL;
  source: string;
  fee: string;
  counter: string;
  gas_limit: string;
  storage_limit: string;
  public_key: string;
  metadata: OperationContentsAndResultMetadataReveal;
}

export interface OperationContentsAndResultTransaction {
  kind: OpKind.TRANSACTION;
  source: string;
  fee: string;
  counter: string;
  gas_limit: string;
  storage_limit: string;
  amount: string;
  destination: string;
  parameters?: TransactionOperationParameter;
  metadata: OperationContentsAndResultMetadataTransaction;
}

export interface OperationContentsAndResultDelegation {
  kind: OpKind.DELEGATION;
  source: string;
  fee: string;
  counter: string;
  gas_limit: string;
  storage_limit: string;
  delegate?: string;
  metadata: OperationContentsAndResultMetadataDelegation;
}

export interface OperationContentsAndResultRegisterGlobalConstant {
  kind: OpKind.REGISTER_GLOBAL_CONSTANT;
  source: string;
  fee: string;
  counter: string;
  gas_limit: string;
  storage_limit: string;
  value: MichelsonV1Expression;
  metadata: OperationContentsAndResultMetadataRegisterGlobalConstant;
}

export interface OperationContentsAndResultSetDepositsLimit {
  kind: OpKind.SET_DEPOSITS_LIMIT;
  source: string;
  fee: string;
  counter: string;
  gas_limit: string;
  storage_limit: string;
  limit?: string;
  metadata: OperationContentsAndResultMetadataSetDepositsLimit;
}

export type OperationContentsAndResult =
  | OperationContentsAndResultEndorsement
  | OperationContentsAndResultPreEndorsement
  | OperationContentsAndResultDoublePreEndorsement
  | OperationContentsAndResultRevelation
  | OperationContentsAndResultDoubleEndorsement
  | OperationContentsAndResultDoubleBaking
  | OperationContentsAndResultActivateAccount
  | OperationContentsAndResultProposals
  | OperationContentsAndResultBallot
  | OperationContentsAndResultReveal
  | OperationContentsAndResultTransaction
  | OperationContentsAndResultOrigination
  | OperationContentsAndResultDelegation
  | OperationContentsAndResultEndorsementWithSlot
  | OperationContentsAndResultRegisterGlobalConstant
  | OperationContentsAndResultSetDepositsLimit;

export interface OperationEntry {
  protocol: string;
  chain_id: string;
  hash: string;
  branch: string;
  contents: (OperationContents | OperationContentsAndResult)[];
  signature?: string;
}

export interface BlockResponse {
  protocol: string;
  chain_id: string;
  hash: string;
  header: BlockFullHeader;
  metadata: BlockMetadata;
  operations: OperationEntry[][];
}

export type BakingRightsArgumentsDelegate = string | string[];
export type BakingRightsArgumentsCycle = number | number[];
export type BakingRightsArgumentsLevel = number | number[];

export type BakingRightsQueryArguments =
  | BakingRightsQueryArgumentsProto12
  | BakingRightsQueryArgumentsBase;

export interface BakingRightsQueryArgumentsProto12
  extends Omit<BakingRightsQueryArgumentsBase, 'max_priority'> {
  max_round?: string;
}
export interface BakingRightsQueryArgumentsBase {
  level?: BakingRightsArgumentsLevel;
  cycle?: BakingRightsArgumentsCycle;
  delegate?: BakingRightsArgumentsDelegate;
  max_priority?: number;
  all?: null;
}

export interface BakingRightsResponseItem {
  level: number;
  delegate: string;
  priority?: number;
  round?: number;
  estimated_time?: Date;
}

export type BakingRightsResponse = BakingRightsResponseItem[];

export type EndorsingRightsArgumentsDelegate = string | string[];
export type EndorsingRightsArgumentsCycle = number | number[];
export type EndorsingRightsArgumentsLevel = number | number[];

export interface EndorsingRightsQueryArguments {
  level?: EndorsingRightsArgumentsLevel;
  cycle?: EndorsingRightsArgumentsCycle;
  delegate?: EndorsingRightsArgumentsDelegate;
}

export interface EndorsingRightsResponseItemDelegates {
  delegate: string;
  first_slot: number;
  endorsing_power: number;
}
export interface EndorsingRightsResponseItem {
  level: number;
  delegate?: string;
  delegates?: EndorsingRightsResponseItemDelegates[];
  slots?: number[];
  estimated_time?: Date;
}

export type EndorsingRightsResponse = EndorsingRightsResponseItem[];

export type BallotListResponseEnum = 'nay' | 'yay' | 'pass';

export interface BallotListResponseItem {
  pkh: string;
  ballot: BallotListResponseEnum;
}

export type BallotListResponse = BallotListResponseItem[];

export interface BallotsResponse {
  yay: number;
  nay: number;
  pass: number;
}

export type PeriodKindResponse =
  | 'proposal'
  | 'testing_vote'
  | 'testing'
  | 'promotion_vote'
  | 'exploration'
  | 'cooldown'
  | 'promotion'
  | 'adoption';

export type CurrentProposalResponse = string | null;

export type CurrentQuorumResponse = number;

export interface VotesListingsResponseItem {
  pkh: string;
  rolls: number;
}

export type VotesListingsResponse = VotesListingsResponseItem[];

export type ProposalsResponseItem = [string, number];

export type ProposalsResponse = ProposalsResponseItem[];

export interface BlockHeaderResponse {
  protocol: string;
  chain_id: string;
  hash: string;
  level: number;
  proto: number;
  predecessor: string;
  timestamp: string;
  validation_pass: number;
  operations_hash: string;
  fitness: string[];
  context: string;
  payload_hash?: string;
  payload_round?: number;
  priority?: number;
  proof_of_work_nonce: string;
  liquidity_baking_escape_vote?: boolean;
  signature: string;
}

export interface PackDataParams {
  data: MichelsonV1Expression;
  type: MichelsonV1Expression;
  gas?: BigNumber;
}

export type HexString = string;

export interface PackDataResponse {
  packed: HexString;
  gas?: BigNumber | 'unaccounted';
}

export type BigMapResponse = MichelsonV1Expression | MichelsonV1Expression[];

export type SaplingDiffResponse = {
  root: SaplingTransactionCommitmentHash;
  commitments_and_ciphertexts: CommitmentsAndCiphertexts[];
  nullifiers: string[];
};

export type SaplingTransactionCommitmentHash = string;

export type PreapplyParams = OperationObject[];
export type PreapplyResponse = {
  contents: OperationContentsAndResult[];
};

export type ForgeOperationsParams = Pick<OperationObject, 'branch' | 'contents'>;

export type TimeStampMixed = Date | string;

export type BalanceUpdateKindEnum = MetadataBalanceUpdatesKindEnum;
export type BalanceUpdateCategoryEnum = MetadataBalanceUpdatesCategoryEnum;

export interface MichelsonV1ExpressionBase {
  int?: string;
  string?: string;
  bytes?: string;
}

export interface MichelsonV1ExpressionExtended {
  prim: string;
  args?: MichelsonV1Expression[];
  annots?: string[];
}

export type MichelsonV1Expression =
  | MichelsonV1ExpressionBase
  | MichelsonV1ExpressionExtended
  | MichelsonV1Expression[];

export interface ScriptedContracts {
  code: MichelsonV1Expression[];
  storage: MichelsonV1Expression;
}

export interface OperationBalanceUpdatesItem {
  kind: BalanceUpdateKindEnum;
  category?: BalanceUpdateCategoryEnum;
  delegate?: string;
  cycle?: number;
  contract?: string;
  change: string;
  origin?: MetadataBalanceUpdatesOriginEnum;
  participation?: boolean;
  revelation?: boolean;
  committer?: string;
}

export type OperationBalanceUpdates = OperationBalanceUpdatesItem[];

export interface OperationObject {
  branch?: string;
  contents?: OperationContents[];
  protocol?: string;
  signature?: string;
}

export type InternalOperationResultKindEnum =
  | OpKind.REVEAL
  | OpKind.TRANSACTION
  | OpKind.ORIGINATION
  | OpKind.DELEGATION
  | OpKind.REGISTER_GLOBAL_CONSTANT
  | OpKind.SET_DEPOSITS_LIMIT;

export type SuccessfulManagerOperationResultKindEnum =
  | OpKind.REVEAL
  | OpKind.TRANSACTION
  | OpKind.ORIGINATION
  | OpKind.DELEGATION;

export type InternalOperationResultEnum =
  | OperationResultReveal
  | OperationResultTransaction
  | OperationResultDelegation
  | OperationResultOrigination
  | OperationResultRegisterGlobalConstant
  | OperationResultSetDepositsLimit;

export interface OperationResultDelegation {
  status: OperationResultStatusEnum;
  consumed_gas?: string;
  errors?: TezosGenericOperationError[];
  consumed_milligas?: string;
}

export interface OperationResultSetDepositsLimit {
  status: OperationResultStatusEnum;
  consumed_gas?: string;
  errors?: TezosGenericOperationError[];
  consumed_milligas?: string;
}

export interface OperationResultRegisterGlobalConstant {
  status: OperationResultStatusEnum;
  balance_updates?: OperationBalanceUpdates;
  consumed_gas?: string;
  storage_size?: string;
  global_address?: string;
  errors?: TezosGenericOperationError[];
}

export interface ContractBigMapDiffItem {
  key_hash?: string;
  key?: MichelsonV1Expression;
  value?: MichelsonV1Expression;
  action?: DiffActionEnum;
  big_map?: string;
  source_big_map?: string;
  destination_big_map?: string;
  key_type?: MichelsonV1Expression;
  value_type?: MichelsonV1Expression;
}

export type ContractBigMapDiff = ContractBigMapDiffItem[];

export interface TezosGenericOperationError {
  kind: string;
  id: string;
}

export interface OperationResultTransaction {
  status: OperationResultStatusEnum;
  storage?: MichelsonV1Expression;
  big_map_diff?: ContractBigMapDiff;
  balance_updates?: OperationBalanceUpdates;
  originated_contracts?: string[];
  consumed_gas?: string;
  storage_size?: string;
  paid_storage_size_diff?: string;
  allocated_destination_contract?: boolean;
  errors?: TezosGenericOperationError[];
  consumed_milligas?: string;
  lazy_storage_diff?: LazyStorageDiff[];
}

export interface OperationResultReveal {
  status: OperationResultStatusEnum;
  consumed_gas?: string;
  errors?: TezosGenericOperationError[];
  consumed_milligas?: string;
}

export interface TransactionOperationParameter {
  entrypoint: string;
  value: MichelsonV1Expression;
}

export interface InternalOperationResult {
  kind: InternalOperationResultKindEnum;
  source: string;
  nonce: number;
  amount?: string;
  destination?: string;
  parameters?: TransactionOperationParameter;
  public_key?: string;
  balance?: string;
  delegate?: string;
  script?: ScriptedContracts;
  value?: MichelsonV1Expression;
  limit?: string;
  result: InternalOperationResultEnum;
}

export interface SuccessfulManagerOperationResult {
  kind: SuccessfulManagerOperationResultKindEnum;
  consumed_gas?: string;
  consumed_milligas?: string;
  storage?: MichelsonV1Expression;
  big_map_diff?: ContractBigMapDiff;
  balance_updates?: OperationBalanceUpdates;
  originated_contracts?: string[];
  storage_size?: string;
  paid_storage_size_diff?: string;
  lazy_storage_diff?: LazyStorageDiff[];
}

export type MetadataBalanceUpdatesKindEnum =
  | 'contract'
  | 'freezer'
  | 'accumulator'
  | 'burned'
  | 'commitment'
  | 'minted';

export enum METADATA_BALANCE_UPDATES_CATEGORY {
  BAKING_REWARDS = 'baking rewards',
  REWARDS = 'rewards',
  FEES = 'fees',
  DEPOSITS = 'deposits',
  LEGACY_REWARDS = 'legacy_rewards',
  LEGACY_FEES = 'legacy_fees',
  LEGACY_DEPOSITS = 'legacy_deposits',
  BLOCK_FEES = 'block fees',
  NONCE_REVELATION_REWARDS = 'nonce revelation rewards',
  DOUBLE_SIGNING_EVIDENCE_REWARDS = 'double signing evidence rewards',
  ENDORSING_REWARDS = 'endorsing rewards',
  BAKING_BONUSES = 'baking bonuses',
  STORAGE_FEES = 'storage fees',
  PUNISHMENTS = 'punishments',
  LOST_ENDORSING_REWARDS = 'lost endorsing rewards',
  SUBSIDY = 'subsidy',
  BURNED = 'burned',
  COMMITMENT = 'commitment',
  BOOTSTRAP = 'bootstrap',
  INVOICE = 'invoice',
  MINTED = 'minted',
}
export type MetadataBalanceUpdatesCategoryEnum = METADATA_BALANCE_UPDATES_CATEGORY;

export type MetadataBalanceUpdatesOriginEnum = 'block' | 'migration' | 'subsidy' | 'simulation';

export interface OperationMetadataBalanceUpdates {
  kind: MetadataBalanceUpdatesKindEnum;
  category?: MetadataBalanceUpdatesCategoryEnum;
  contract?: string;
  delegate?: string;
  participation?: boolean;
  revelation?: boolean;
  committer?: string;
  cycle?: number;
  change: string;
  origin?: MetadataBalanceUpdatesOriginEnum;
}

export type OperationResultStatusEnum = 'applied' | 'failed' | 'skipped' | 'backtracked';

export type DiffActionEnum = 'update' | 'remove' | 'copy' | 'alloc';

export type LazyStorageDiff = LazyStorageDiffBigMap | LazyStorageDiffSaplingState;

export interface LazyStorageDiffBigMap {
  kind: 'big_map';
  id: string;
  diff: LazyStorageDiffBigMapItems;
}

export interface LazyStorageDiffSaplingState {
  kind: 'sapling_state';
  id: string;
  diff: LazyStorageDiffSaplingStateItems;
}

export interface LazyStorageDiffBigMapItems {
  action: DiffActionEnum;
  updates?: LazyStorageDiffUpdatesBigMap[];
  source?: string;
  key_type?: MichelsonV1Expression;
  value_type?: MichelsonV1Expression;
}

export interface LazyStorageDiffSaplingStateItems {
  action: DiffActionEnum;
  updates?: LazyStorageDiffUpdatesSaplingState;
  source?: string;
  memo_size?: number;
}

export interface LazyStorageDiffUpdatesBigMap {
  key_hash: string;
  key: MichelsonV1Expression;
  value?: MichelsonV1Expression;
}

export type CommitmentsAndCiphertexts = [
  SaplingTransactionCommitment,
  SaplingTransactionCiphertext
];

export type SaplingTransactionCommitment = string;

export interface LazyStorageDiffUpdatesSaplingState {
  commitments_and_ciphertexts: CommitmentsAndCiphertexts[];
  nullifiers: string[];
}

export interface SaplingTransactionCiphertext {
  cv: string;
  epk: string;
  payload_enc: string;
  nonce_enc: string;
  payload_out: string;
  nonce_out: string;
}

export interface OperationResultOrigination {
  status: OperationResultStatusEnum;
  big_map_diff?: ContractBigMapDiff;
  balance_updates?: OperationBalanceUpdates;
  originated_contracts?: string[];
  consumed_gas?: string;
  storage_size?: string;
  paid_storage_size_diff?: string;
  errors?: TezosGenericOperationError[];
  consumed_milligas?: string;
  lazy_storage_diff?: LazyStorageDiff[];
}

export interface OperationContentsAndResultMetadataOrigination {
  balance_updates: OperationMetadataBalanceUpdates[];
  operation_result: OperationResultOrigination;
  internal_operation_results?: InternalOperationResult[];
}

export type ConstantsResponse = ConstantsResponseCommon &
  ConstantsResponseProto012 &
  ConstantsResponseProto011 &
  ConstantsResponseProto010 &
  ConstantsResponseProto009 &
  ConstantsResponseProto008 &
  ConstantsResponseProto007 &
  ConstantsResponseProto006 &
  ConstantsResponseProto005 &
  ConstantsResponseProto004 &
  ConstantsResponseProto003 &
  ConstantsResponseProto001And002;

export interface ConstantsResponseCommon {
  proof_of_work_nonce_size: number;
  nonce_length: number;
  max_operation_data_length: number;
  preserved_cycles: number;
  blocks_per_cycle: number;
  blocks_per_commitment: number;
  blocks_per_roll_snapshot: number;
  blocks_per_voting_period: number;
  time_between_blocks: BigNumber[];
  endorsers_per_block: number;
  hard_gas_limit_per_operation: BigNumber;
  hard_gas_limit_per_block: BigNumber;
  proof_of_work_threshold: BigNumber;
  tokens_per_roll: BigNumber;
  michelson_maximum_type_size: number;
  seed_nonce_revelation_tip: BigNumber;
  block_security_deposit: BigNumber;
  endorsement_security_deposit: BigNumber;
  endorsement_reward: BigNumber | BigNumber[]; // BigNumber[] since proto 006, BigNumber before
  cost_per_byte: BigNumber;
  hard_storage_limit_per_operation: BigNumber;
}

export type Ratio = { numerator: number; denominator: number };
export interface ConstantsResponseProto012
  extends Omit<
    ConstantsResponseProto011,
    | 'baking_reward_per_endorsement'
    | 'initial_endorsers'
    | 'delay_per_missing_endorsement'
    | 'test_chain_duration'
    | 'blocks_per_roll_snapshot'
    | 'time_between_blocks'
    | 'endorsers_per_block'
    | 'block_security_deposit'
    | 'endorsement_security_deposit'
    | 'endorsement_reward'
  > {
  blocks_per_stake_snapshot?: number;
  baking_reward_fixed_portion?: BigNumber;
  baking_reward_bonus_per_slot?: BigNumber;
  endorsing_reward_per_slot?: BigNumber;
  max_operations_time_to_live?: number;
  consensus_committee_size?: number;
  consensus_threshold?: number;
  minimal_participation_ratio?: Ratio;
  max_slashing_period?: number;
  frozen_deposits_percentage?: number;
  double_baking_punishment?: BigNumber;
  ratio_of_frozen_deposits_slashed_per_double_endorsement?: Ratio;
  delegate_selection?: 'random' | string[][];
  delay_increment_per_round?: BigNumber;
}

export interface ConstantsResponseProto011 extends ConstantsResponseProto010 {
  max_micheline_node_count?: number;
  max_allowed_global_constants_depth?: number;
  max_micheline_bytes_limit?: number;
  cache_layout?: BigNumber[];
}
export interface ConstantsResponseProto010 extends ConstantsResponseProto007 {
  minimal_block_delay?: BigNumber;
  liquidity_baking_subsidy?: BigNumber;
  liquidity_baking_sunset_level?: number;
  liquidity_baking_escape_ema_threshold?: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConstantsResponseProto009 extends ConstantsResponseProto007 {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConstantsResponseProto008 extends ConstantsResponseProto007 {}

export interface ConstantsResponseProto007
  extends Omit<ConstantsResponseProto006, 'max_revelations_per_block'> {
  max_anon_ops_per_block?: number;
}

export interface ConstantsResponseProto006 extends Omit<ConstantsResponseProto005, 'block_reward'> {
  baking_reward_per_endorsement?: BigNumber[];
}

export interface ConstantsResponseProto005 extends ConstantsResponseProto004 {
  quorum_min?: number;
  quorum_max?: number;
  min_proposal_quorum?: number;
  initial_endorsers?: number;
  delay_per_missing_endorsement?: BigNumber;
}

export interface ConstantsResponseProto004 extends ConstantsResponseProto003 {
  test_chain_duration?: BigNumber;
}

export interface ConstantsResponseProto003
  extends Omit<ConstantsResponseProto001And002, 'origination_burn'> {
  origination_size?: number;
  max_proposals_per_delegate?: number;
}

export interface ConstantsResponseProto001And002 {
  max_revelations_per_block?: number;
  origination_burn?: string;
  block_reward?: BigNumber;
}

export interface ContractResponse {
  balance: BigNumber;
  script: ScriptedContracts;
  counter?: string;
  delegate?: string;
}

export interface TestChainStatus {
  status: string;
}

export interface MaxOperationListLength {
  max_size: number;
  max_op?: number;
}

export interface Level {
  level: number;
  level_position: number;
  cycle: number;
  cycle_position: number;
  voting_period: number;
  voting_period_position: number;
  expected_commitment: boolean;
}

export interface LevelInfo {
  level: number;
  level_position: number;
  cycle: number;
  cycle_position: number;
  expected_commitment: boolean;
}

export interface BlockMetadata {
  protocol: string;
  next_protocol: string;
  test_chain_status: TestChainStatus;
  max_operations_ttl: number;
  max_operation_data_length: number;
  max_block_header_length: number;
  max_operation_list_length: MaxOperationListLength[];
  proposer?: string;
  baker: string;
  level?: Level;
  level_info?: LevelInfo;
  voting_period_kind?: string;
  voting_period_info?: VotingPeriodBlockResult;
  nonce_hash?: any;
  consumed_gas: string;
  deactivated: any[];
  balance_updates: OperationBalanceUpdates;
  liquidity_baking_escape_ema?: number;
  implicit_operations_results?: SuccessfulManagerOperationResult[];
}

export type RPCRunOperationParam = {
  operation: OperationObject;
  chain_id: string;
};

export type RPCRunCodeParam = {
  script: MichelsonV1ExpressionExtended[];
  storage: MichelsonV1Expression;
  input: MichelsonV1Expression;
  amount: string;
  chain_id: string;
  source?: string;
  payer?: string;
  gas?: BigNumber;
  entrypoint?: string;
  balance?: string;
};

export type RunCodeResult = {
  storage: MichelsonV1Expression;
  operations: InternalOperationResult[];
  big_map_diff?: ContractBigMapDiff;
  lazy_storage_diff?: LazyStorageDiff;
};

export type RPCRunViewParam = {
  contract: string;
  entrypoint: string;
  input: MichelsonV1Expression;
  chain_id: string;
  source?: string;
  payer?: string;
  gas?: BigNumber;
  unparsing_mode?: UnparsingModeEnum;
};

export type RunViewResult = {
  data: MichelsonV1Expression;
};

export type EntrypointsResponse = {
  entrypoints: { [key: string]: MichelsonV1ExpressionExtended };
  unreachable?: { path: ('Left' | 'Right')[] };
};

export interface OperationContentsAndResultOrigination {
  kind: OpKind.ORIGINATION;
  source: string;
  fee: string;
  counter: string;
  gas_limit: string;
  storage_limit: string;
  balance: string;
  delegate?: string;
  script?: ScriptedContracts;
  metadata: OperationContentsAndResultMetadataOrigination;
}

export interface VotingPeriodResult {
  index: number;
  kind: PeriodKindResponse;
  start_position: number;
}

export interface VotingPeriodBlockResult {
  voting_period: VotingPeriodResult;
  position: number;
  remaining: number;
}

export type UnparsingModeEnum = 'Readable' | 'Optimized' | 'Optimized_legacy';
export type UnparsingMode = {
  unparsing_mode: UnparsingModeEnum;
};

export type ProtocolsResponse = {
  protocol: string;
  next_protocol: string;
};
