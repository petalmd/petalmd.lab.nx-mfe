import { State } from "../../interfaces/state.interface";

export interface StateRepository {
  create(state: State): Promise<State>;
  get(id: number): Promise<State | null>;
};

export const StateRepository = Symbol('StateRepository');
