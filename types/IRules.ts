export interface RuleObj {
  ruleType: "must_combine" | "can_not_combine";
  first: {
    layer: string;
    element: string;
  };
  second: {
    layer: string;
    element: string;
  };
}

export type IRules = RuleObj[]