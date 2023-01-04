export enum EOFError {
  // Stream Reader
  OutOfBounds = 'trying to read out of bounds',
  VerifyUint = ' uint do not match expected value',
  VerifyBytes = ' bytes do not match expected value',

  // Section Markers
  MAGIC = `header should start with magic bytes: 0xEF00`,
  VERSION = `Version should be 1`,
  KIND_TYPE = `type section marker 0x01 expected`,
  KIND_CODE = `type section marker 0x02 expected`,
  KIND_DATA = `type section marker 0x03 expected`,
  TERMINATOR = `terminator 0x00 expected`,

  // Section Sizes
  TypeSize = `missing type size`,
  InvalidTypeSize = `invalid type size = should be at least 4 and should be a multiple of 4. got = `,
  CodeSize = `missing code size`,
  CodeSectionSize = `code section should be at least one byte`,
  DataSize = `missing data size`,

  // Type Section
  TypeSections = `need to have a type section for each code section`,
  Inputs = 'expected inputs',
  Outputs = 'expected outputs',
  MaxInputs = 'inputs exceeds 127, the maximum, got:',
  MaxOutputs = 'outputs exceeds 127, the maximum, got:',
  Code0Inputs = 'type section body = first code section should have 0 inputs',
  Code0Outputs = 'type section body = first code section should have 0 outputs',
  MaxStackHeight = `expected maxStackHeight`,

  // Code/Data Section
  MinCodeSections = `should have at least 1 code section`,
  MaxCodeSections = `can have at most 1024 code sections`,
  CodeSection = `expected a code section`,
  DataSection = `dataSection: expected data`,

  // Dangling Bytes
  DanglingBytes = 'got dangling bytes in body',
}

export function validationError(type: EOFError, ...args: any) {
  switch (type) {
    case EOFError.OutOfBounds: {
      throw new Error(`pos: ${args[0]}: ` + EOFError.OutOfBounds + args[1] ?? EOFError.OutOfBounds)
    }
    case EOFError.VerifyBytes: {
      throw new Error(`pos: ${args[0]}: ` + args[1] + EOFError.VerifyBytes)
    }
    case EOFError.VerifyUint: {
      throw new Error(`pos: ` + args[0] + `: ` + args[1] + EOFError.VerifyUint)
    }
    case EOFError.TypeSize: {
      throw new Error(EOFError.TypeSize + args[0])
    }
    case EOFError.Inputs: {
      return `typeSection ${args[0]}: ${EOFError.Inputs}`
    }
    case EOFError.Outputs: {
      return `typeSection ${args[0]}: ${EOFError.Outputs}`
    }
    case EOFError.Code0Inputs: {
      throw new Error(`typeSection 0: first code section should have 0 inputs`)
    }
    case EOFError.Code0Outputs: {
      throw new Error(`typeSection 0: first code section should have 0 outputs`)
    }
    case EOFError.MaxInputs: {
      throw new Error(`code section ${args[0]}: ` + EOFError.MaxInputs + args[1])
    }
    case EOFError.MaxOutputs: {
      throw new Error(`code section ${args[0]}: ` + EOFError.MaxOutputs + args[1])
    }
    case EOFError.CodeSection: {
      return `codeSection ${args[0]}: expected code`
    }
    case EOFError.DataSection: {
      throw new Error(EOFError.DataSection)
    }
    case EOFError.MaxStackHeight: {
      throw new Error(`typeSection ${args[0]}: ` + EOFError.MaxStackHeight)
    }
  }
}