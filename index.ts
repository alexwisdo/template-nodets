const SUCCESS = true;
const FAILURE = null;

type solver = { idx: number; payload: any };

export class CPU {
  solvers: solver[] = [];
  conf: { idx: number } = { idx: 0 };
  collection: any[] = [];

  constructor(conf: object, collection: any[] = []) {
    // this.conf:{ idx: number} = { idx: 0 };
    this.solvers = [];
  }

  baseInit(items: any[], conf: object = {}, index = 0) {
    const baseSetItems = (items: any[]) => {
      const itemsValidation = items?.length;
      if (!itemsValidation) this.collection = [];
      else this.collection = [...items];

      return SUCCESS;
    };
    const baseIndexSet = (idx: number) => {
      this.conf.idx = idx;
    };
    const baseConfSet = (conf: object) => {
      if (!conf) return FAILURE;
      this.conf = { ...this.conf, ...conf };
      return SUCCESS;
    };
    baseSetItems(items);
    baseIndexSet(index);
    baseConfSet(conf);
  }

  baseIndexGet() {
    return this.conf.idx;
  }

  baseIndexIncrease(): number | null {
    const newIdx = this.conf.idx + 1;
    if (!(newIdx < this.collection.length)) return FAILURE;
    return newIdx;
  }

  baseConfGet() {
    return this.conf;
  }

  baseCollectionGet() {
    return [...this.collection];
  }

  baseSolversGet() {
    return [...this.solvers];
  }

  baseItemGet() {
    return this.collection && this.collection[this.conf.idx];
  }

  baseItemGetByIndex(idx: number) {
    return this.collection && this.collection[idx];
  }

  isCompleted() {
    return false;
  }

  isActive() {
    return true;
  }

  baseSolverPush(payload: any): number | null {
    const completed = this.isCompleted();
    const active = this.isActive();

    if (!active || completed) return FAILURE;

    const itemIdx: number = this.baseIndexGet();
    const solverValidation = payload && itemIdx >= 0;
    if (!solverValidation) return FAILURE; // implement step-solution validator

    const solver: solver = { idx: itemIdx, payload };
    return this.solvers.push(solver);
  }
}

console.log('hola amigoz333333333 ')