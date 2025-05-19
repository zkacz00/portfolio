export interface Trace {
  file: string;
  line: number;
  lineText: string;
}

export interface BuildError extends Trace {
  pluginName: string;
  text: string;
  stacktrace: Trace[];
}
