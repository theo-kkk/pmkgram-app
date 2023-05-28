interface Code {
  type: string;
  group: string;
  code: string;
  name: string;
}

interface GroupCode {
  group: string;
  name: string;
  codes: {
    code_id: string;
    name: string;
  }[];
}

export interface BaseData {
  code: {
    step1: Code[];
    step2: GroupCode[];
  };
}
