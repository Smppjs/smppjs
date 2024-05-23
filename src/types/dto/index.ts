export * from './bind_transceiver';
export * from './bind_transceiver_resp';
export * from './submit_sm';
export * from './submit_sm_resp';

export type DTO<T = Record<string, { type: 'Cstring' | 'Int8'; value: string | number | Buffer; encode?: 'ascii' | 'latin1' | 'usc2'; setLength?: boolean }>> =
    T;
export interface DTOFunction<T = any, Y = DTO> {
    (...args: T[]): Y;
}
