searchState.loadedDescShard("cranelift_codegen", 1, "A memory operand.\nA memory operand.\n= unsigned\nunsigned\n= signed\nsigned\nno overflow\nnot parity\nnot-negative\nnot-zero\nNo value.\nNo value.\nNo extension.\nNot equal comparison.\noverflow\nAn operand’s size in bits.\nOptional writable Gpr.\nOptional writable Gpr.\nBitwise inclusive OR.\nOrdered.\nparity\nCounts the number of ones (POPulation CouNT).\nA real amode.\nA register operand.\nA register operand.\nA register operand.\nAn operand which is either an integer Register or a value …\nAn operand which is either an integer Register, a value in …\nLeft rotation.\nRight rotation.\nRound down mode.\nEncode the rounding modes used as part of the Rounding …\nRound to nearest mode.\nRound up mode.\nRound to zero mode.\nnegative\n<code>sfence</code> instruction (“Store Fence”)\nInteger subtraction with borrow.\nThese indicate the form of a scalar shift/rotate: left, …\nLeft shift.\nReplicates the sign bit in the most significant bits.\nInserts zeros in the most significant bits.\nSign-extend.\n16-bit.\n32-bit.\n64-bit.\n8-bit.\nA (virtual) offset to the slot area of the function frame, …\nSome value of type <code>T</code>.\nSome value of type <code>T</code>.\nSome SSE operations requiring 2 operands r/m and r.\nInteger subtraction.\nA Memory Address. These denote a 64-bit value only. Used …\nTEST instruction: compute <code>a &amp; b</code> and set flags from result.\nAn extension trait for converting <code>Writable{Xmm,Gpr}</code> to …\nCounts trailing zeroes (Trailing Zero CouNT).\nInternal type UnaryRmRImmVexOpcode: defined at …\nUnary operations requiring register or memory and register …\nInternal type UnaryRmRVexOpcode: defined at …\nUnordered.\nUnordered or greater than comparison.\nUnordered of greater than or equal comparison.\nWord -&gt; Longword.\nWord -&gt; Quadword.\nWritable Gpr.\nWritable Gpr.\nA newtype wrapper around <code>Reg</code>.\nA newtype wrapper around <code>RegMem</code> for general-purpose …\nA newtype wrapper around <code>RegMem</code> for general-purpose …\nA newtype wrapper around <code>RegMemImm</code>.\nA newtype wrapper around <code>RegMemImm</code>.\nBitwise exclusive OR.\nzero\nZero-extend.\nBorrow this newtype as its underlying <code>Imm8Reg</code>.\nBorrow this newtype as its underlying <code>Imm8Reg</code>.\nBorrow this newtype as its underlying <code>Imm8Reg</code>.\nBorrow this newtype as its underlying <code>Imm8Reg</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert <code>Writable&lt;Reg&gt;</code> to <code>Writable{Xmm,Gpr}</code>.\nCreate an immediate operand.\nCreate an immediate sign-extended and register addressing …\nCreate a sign-extended-32-to-64 with register and shift …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a memory operand.\nCreate a memory operand.\nCreate this newtype from the given register, or return <code>None</code>…\nConstruct a <code>RegMem</code> newtype from the given <code>RegMem</code>, or return\nConstruct this newtype from the given <code>RegMemImm</code>, or return …\nConstruct this newtype from the given <code>Imm8Reg</code>, or return …\nCreate this newtype from the given register, or return <code>None</code>…\nConstruct a <code>RegMem</code> newtype from the given <code>RegMem</code>, or return\nConstruct a <code>RegMem</code> newtype from the given <code>RegMem</code>, or return\nConstruct this newtype from the given <code>RegMemImm</code>, or return …\nConstruct this newtype from the given <code>RegMemImm</code>, or return …\nConstruct this newtype from the given <code>Imm8Reg</code>, or return …\nCreate a real addressing mode.\nCreate a register operand.\nCreate a register operand.\nGet this newtype’s underlying <code>Reg</code>.\nGet this newtype’s underlying <code>Reg</code>.\nConvert this newtype into its underlying <code>RegMem</code>.\nConvert this newtype into its underlying <code>RegMem</code>.\nConvert this newtype into its underlying <code>RegMem</code>.\nConvert this newtype into its underlying <code>RegMemImm</code>.\nConvert this newtype into its underlying <code>RegMemImm</code>.\nConvert this newtype into its underlying <code>RegMemImm</code>.\nConvert <code>Writable{Xmm,Gpr}</code> to <code>Writable&lt;Reg&gt;</code>.\nWhat is the “TupleType” of this opcode, which affects …\nSet the specified MemFlags to the Amode.\nThe 8-bit immediate value.\nThe underlying register.\nThe memory address.\nThe underlying register.\nThe memory address.\nThe underlying register.\nThe immediate value.\nThe downward offset from the start of the incoming …\nThe offset into the slot area.\nThe encoding formats in this module all require a way of …\nEncodes EVEX instructions. These instructions are those …\nAdd 1 byte to the code section.\nAdd 2 bytes to the code section.\nAdd 4 bytes to the code section.\nAdd 8 bytes to the code section.\nEncodes instructions in the standard x86 encoding mode. …\nEncodes VEX instructions. These instructions are those …\nDefines the EVEX context for the <code>L&#39;</code>, <code>L</code>, and <code>b</code> bits (bits …\nConstructs an EVEX-encoded instruction using a builder …\nDefines the EVEX masking behavior; masking support is …\nThe EVEX format allows defining rounding control in the <code>L&#39;</code> …\nThe EVEX format allows choosing a vector length in the <code>L&#39;</code> …\nDescribe the register index to use. This wrapper is a …\nEncode the <code>aaa</code> bits for merging with the P2 byte.\nEncode the <code>L&#39;</code>, <code>L</code>, and <code>b</code> bits (bits 6:4 of EVEX P2 byte) …\nEmit the EVEX-encoded instruction to the code sink:\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nSet the imm byte.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSet the length of the instruction . Note that there are …\nSet the opcode map byte of the instruction: None | 0F | …\nSet the mask to use. See section 2.6 in the Intel Software …\nConstruct a default EVEX instruction.\nSet the instruction opcode byte.\nSet the legacy prefix byte of the instruction: None | 66 | …\nSet the register to use for the <code>reg</code> bits; many …\nSet the register to use for the <code>rm</code> bits; many instructions …\nSet the “tuple type” which is used for 8-bit scaling …\nSet the <code>vvvvv</code> register; some instructions allow using this …\nSet the W bit, typically used to indicate an instruction …\nEncode the <code>z</code> bit for merging with the P2 byte.\nWe may need to include one or more legacy prefix bytes …\nNo prefix bytes.\nAllows using the same opcode byte in different “opcode …\nA small bit field to record a REX prefix specification:\nOperand Size Override – here, denoting “16-bit …\nOperand size override and Lock.\nOperand size override and same effect as F3.\nThe Lock prefix.\nREPNE, but no specific meaning here – is just an opcode …\nREP/REPE, but no specific meaning here – is just an …\nRequire that the REX prefix is emitted.\nEmit the rex prefix if the referenced register would …\nCreates a new RexPrefix for which the REX.W bit will be …\nEmit a unary instruction.\nEmit a ternary instruction.\nEmit a binary instruction.\nEncode the ModR/M byte.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTrue if the REX prefix must always be emitted.\nTrue if 64-bit operands are used.\nBy default, set the W field, and don’t always emit.\nConstructs a VEX-encoded instruction using a builder …\nThe VEX format allows choosing a vector length in the <code>L</code> …\nEmit the VEX-encoded instruction to the provided buffer.\nReturns the argument unchanged.\nReturns the argument unchanged.\nSet the imm byte. Overrides a previously set Self::imm_reg …\nSet the imm byte when used for a register. The reg bits …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSet the length of the instruction.\nSet the opcode map byte of the instruction: None | 0F | …\nConstruct a default VEX instruction.\nSet the instruction opcode byte.\nSome instructions use the ModRM.reg field as an opcode …\nSet the legacy prefix byte of the instruction: None | 66 | …\nSet the register to use for the <code>reg</code> bits; many …\nSet the register to use for the <code>rm</code> bits; many instructions …\nSet the <code>vvvv</code> register; some instructions allow using this …\nSet the W bit, denoted by <code>.W1</code> or <code>.W0</code> in the instruction …\nFlags group <code>x86</code>.\nCreate a <code>settings::Builder</code> for the x86 settings group.\nReturns the argument unchanged.\nHas support for AVX. AVX: CPUID.01H:ECX.AVX[bit 28]\nHas support for AVX2. AVX2: CPUID.07H:EBX.AVX2[bit 5]\nHas support for AVX512BITALG. AVX512BITALG: …\nHas support for AVX512DQ. AVX512DQ: CPUID.07H:EBX.AVX512DQ[…\nHas support for AVX512F. AVX512F: CPUID.07H:EBX.AVX512F[…\nHas support for AVX512VMBI. AVX512VBMI: …\nHas support for AVX512VL. AVX512VL: CPUID.07H:EBX.AVX512VL[…\nHas support for BMI1. BMI1: CPUID.(EAX=07H, …\nHas support for BMI2. BMI2: CPUID.(EAX=07H, …\nHas support for FMA. FMA: CPUID.01H:ECX.FMA[bit 12]\nHas support for LZCNT. LZCNT: CPUID.EAX=80000001H:ECX.LZCNT…\nHas support for POPCNT. POPCNT: CPUID.01H:ECX.POPCNT[bit 23…\nHas support for SSE3. SSE3: CPUID.01H:ECX.SSE3[bit 0]\nHas support for SSE4.1. SSE4.1: CPUID.01H:ECX.SSE4_1[bit 19…\nHas support for SSE4.2. SSE4.2: CPUID.01H:ECX.SSE4_2[bit 20…\nHas support for SSSE3. SSSE3: CPUID.01H:ECX.SSSE3[bit 9]\nCalls <code>U::from(self)</code>.\nIterates the setting values.\nCreate flags x86 settings group.\nGet a view of the boolean predicates.\nComputed predicate <code>x86.has_avx()</code>.\nComputed predicate <code>x86.has_avx() &amp;&amp; x86.has_avx2()</code>.\nComputed predicate <code>x86.has_avx512bitalg()</code>.\nComputed predicate <code>x86.has_avx512dq()</code>.\nComputed predicate <code>x86.has_avx512f()</code>.\nComputed predicate <code>x86.has_avx512vbmi()</code>.\nComputed predicate <code>x86.has_avx512vl()</code>.\nComputed predicate <code>x86.has_bmi1()</code>.\nComputed predicate <code>x86.has_bmi2()</code>.\nComputed predicate <code>x86.has_avx() &amp;&amp; x86.has_fma()</code>.\nComputed predicate <code>x86.has_lzcnt()</code>.\nComputed predicate <code>x86.has_popcnt() &amp;&amp; x86.has_sse42()</code>.\nComputed predicate <code>x86.has_sse41()</code>.\nComputed predicate <code>x86.has_sse41() &amp;&amp; x86.has_sse42()</code>.\nComputed predicate <code>x86.has_ssse3()</code>.\nA opaque reference to a code loop.\nLoop tree information for a single function.\nA level in a loop nest.\nReturn the raw bit encoding for this instance.\nReturn the underlying index value as a <code>u32</code>.\nA clamped loop level from a larger-width (usize) depth.\nClear all the data structures contained in the loop …\nDetects the loops in a function. Needs the control flow …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a new instance from the raw bit encoding.\nCreate a new instance from a <code>u32</code>.\nOne loop level deeper.\nReturn the innermost loop for a given block.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nInvalid loop level.\nDetermines if a loop is contained in another loop.\nDetermine if a Block belongs to a loop by running a finger …\nDetermine if a Block is a loop header. If so, return the …\nCheck if the loop analysis is in a valid state.\nGet the loop level.\nReturns the header block of a particular loop.\nReturns the loop-nest level of a given block.\nReturn the eventual parent of a loop in the loop tree.\nReturns all the loops contained in a function.\nAllocate a new blank loop analysis struct. Use <code>compute</code> to …\nGet the root level (no loop).\nPacked representation of <code>Option&lt;T&gt;</code>.\nTypes that have a reserved value which can’t be created …\nCreate a default packed option representing <code>None</code>.\nExpand the packed option into a normal <code>Option</code>.\nUnwrap a packed <code>Some</code> value or panic.\nReturns the argument unchanged.\nConvert <code>t</code> into a packed <code>Some(x)</code>.\nConvert an option into its packed equivalent.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if the packed option is a <code>None</code> value.\nChecks whether value is the reserved one.\nReturns <code>true</code> if the packed option is a <code>Some</code> value.\nMaps a <code>PackedOption&lt;T&gt;</code> to <code>Option&lt;U&gt;</code> by applying a function …\nCreate an instance of the reserved value.\nTakes the value out of the packed option, leaving a <code>None</code> …\nUnwrap a packed <code>Some</code> value or panic.\nPretty-print a Cranelift error.\nPretty-print a verifier error.\n<code>apple_aarch64</code>.\nNo setting by this name exists.\nType mismatch for setting (e.g., setting an enum setting …\nThis is not a valid value for this setting.\nThe setting is a boolean.\nCollect settings values based on a template.\n<code>coff</code>.\n<code>cold</code>.\nA string-based configurator for settings groups.\n<code>elf_gd</code>.\nThe setting is an enumeration.\nContains the error value\n<code>fast</code>.\nFlags group <code>shared</code>.\nWrapper containing flags and optionally a <code>TargetIsa</code> trait …\n<code>inline</code>.\n<code>isa_default</code>.\nValues for <code>shared.libcall_call_conv</code>.\n<code>macho</code>.\n<code>none</code>.\n<code>none</code>.\nThe setting is a number.\nContains the success value\nValues for <code>shared.opt_level</code>.\n<code>outline</code>.\nA reference to just the boolean predicates of a settings …\nThe setting is a preset.\n<code>probestack</code>.\nValues for <code>shared.probestack_strategy</code>.\nAn error produced when changing a setting.\nA result returned when changing a setting.\nRepresents an available builder setting.\nRepresents the kind of setting.\n<code>speed</code>.\n<code>speed_and_size</code>.\n<code>system_v</code>.\nValues for <code>shared.tls_model</code>.\nRepresents a setting value.\n<code>windows_fastcall</code>.\nReturns a slice with all possible OptLevel values.\nReturns a slice with all possible TlsModel values.\nReturns a slice with all possible LibcallCallConv values.\nReturns a slice with all possible ProbestackStrategy …\nGets the boolean value if the value is from a boolean …\nGets the enum value if the value is from an enum setting.\nGets the numerical value if the value is from a num …\nThe log2 of the size to insert dummy padding between basic …\nCreate a <code>settings::Builder</code> for the shared settings group.\nThe description of the setting.\nImplementation details for generated code.\nEnable a boolean setting or apply a preset.\nDo redundant-load optimizations with alias analysis.\nEnable the use of atomic instructions\nEnable the use of floating-point instructions.\nEnable Spectre mitigation on heap bounds checks.\nEnable additional checks for debugging the incremental …\nEnable the use of jump tables in generated machine code.\nEnable various ABI extensions defined by LLVM’s behavior.\nEnable NaN canonicalization.\nEnable proof-carrying code translation validation.\nEnable the use of the pinned register.\nEnable the use of stack probes for supported calling …\nEnable safepoint instruction insertions.\nEnable Spectre mitigation on table bounds checks.\nRun the Cranelift IR verifier at strategic times during …\nFlags are always present.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nEnable Position-Independent Code generation.\nThe ISA may not be present.\nIterates the available settings in the builder.\nIterates the setting values.\nGets the kind of setting.\nThe kind of the setting.\nDefines the calling convention to use for LibCalls call …\nGenerate CFG metadata for machine code.\nThe name of the setting associated with this value.\nThe name of the setting.\nCreate a new builder with defaults and names from the …\nCreate a new view of a precomputed predicate vector.\nCreate flags shared settings group.\nOptimization level for generated code.\nGet a view of the boolean predicates.\nPreserve frame pointers\nThe log2 of the size of the stack guard region.\nControls what kinds of stack probes are emitted.\nEnable the symbolic checker for register allocation.\nEnable verbose debug logs for regalloc2.\nSet the string value of any setting by name.\nExtract contents of builder once everything is configured.\nCheck a numbered predicate.\nDefines the model used to perform TLS accesses.\nGenerate unwind information.\nUse colocated libcalls.\nBuilds a string from the current value\nThe supported values of the setting (for enum values).\nA boolean setting only uses one bit, numbered from LSB.\nA setting descriptor holds the information needed to …\nThe different kind of settings along with descriptor bits …\nAn Enum setting uses a range of enumerators.\nA numerical setting uses the whole byte.\nA preset is not an individual setting, it is a collection …\nAn instruction group template.\nDefault values.\nThe description of the setting.\nList of setting descriptors.\nAdditional details, depending on the kind of setting.\nUnion of all enumerators.\nGet enumerators corresponding to a <code>Details::Enum</code>.\nFormat a setting value as a TOML string. This is mostly …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nHash table of settings.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCheck if a detail is a Detail::Preset. Useful because the …\nName of the instruction group.\nLower snake-case name of setting as defined in meta.\nOffset of byte containing this setting.\nPairs of (mask, value) for presets.\n0-7.\nFirst enumerator in the ENUMERATORS table.\nNumerical value of last enumerator, allowing for 1-256 …\nThe default profiler. You can get the results using …\nThe amount of profiled passes.\nNo active pass.\nA single profiled pass.\nAccumulated timing for all passes.\nA profiler.\nAdd <code>other</code> to the timings of this <code>PassTimes</code>.\nCanonicalization of NaNs\nCanonicalization of NaNs\nCompilation passes\nCompilation passes\nDescription of the pass.\nDominator tree\nDominator tree\nEgraph based optimizations\nEgraph based optimizations\nControl flow graph\nControl flow graph\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGlobal value numbering\nGlobal value numbering\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLayout full renumbering\nLayout full renumbering\nLoop invariant code motion\nLoop invariant code motion\nLoop analysis\nLoop analysis\nParsing textual Cranelift IR\nParsing textual Cranelift IR\nPre-legalization rewriting\nPre-legalization rewriting\nProcessing test file\nProcessing test file\nRegister allocation\nRegister allocation\nRegister allocation symbolic verification\nRegister allocation symbolic verification\nRemove constant phi-nodes\nRemove constant phi-nodes\nSet the profiler for the current thread.\nStart a profiling pass.\nStore in incremental cache\nStore in incremental cache\nTake the current accumulated pass timings and reset the …\nReturns the total amount of time taken by all the passes …\nTry loading from incremental cache\nTry loading from incremental cache\nRemove unreachable blocks\nRemove unreachable blocks\nVCode emission\nVCode emission\nVCode emission finalization\nVCode emission finalization\nVCode lowering\nVCode lowering\nVerify Cranelift IR\nVerify Cranelift IR\nTranslate WASM function\nTranslate WASM function\nTranslate WASM module\nTranslate WASM module\nA depth-first traversal.\nAn iterator that yields pairs of <code>(Event, ir::Block)</code> items …\nAn iterator that yields <code>ir::Block</code> items during a …\nAn iterator that yields <code>ir::Block</code> items during a …\nEntering traversal of a block.\nA low-level DFS traversal event: either entering or …\nExiting traversal of a block.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nPerform a depth-first traversal over the given function.\nConstruct a new depth-first traversal.\nPerform a post-order traversal over the given function.\nPerform a pre-order traversal over the given function.\nContains the error value\nContains the error value\nContains the success value\nContains the success value\nA verifier error.\nList of verifier errors.\nResult of a verification operation.\nResult of a step in the verification process.\nReturn a <code>VerifierStepResult</code> that is fatal if at least one …\nOptionally provide some context for the given location; …\nReport a fatal error and return <code>Err</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturn whether one or more errors were reported.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturn whether no errors were reported.\nThe entity causing the verifier error.\nThe error message.\nReturn a new <code>VerifierErrors</code> struct.\nReport a non-fatal error and return <code>Ok</code>.\nReport an error, adding it to the list of errors.\nVerify <code>func</code> after checking the integrity of associated …\nVerify <code>func</code>.\nA <code>FuncWriter</code> used to decorate functions during printing.\nA <code>PlainWriter</code> that doesn’t decorate the function.\nWrites <code>func</code> to <code>w</code> as text. write_function_plain is passed …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nDefault impl of <code>write_entity_definition</code>\nDefault impl of <code>write_preamble</code>\nWrite out the basic block header, outdented:\nWrite the basic block header for the current function.\nWrite an entity definition defined in the preamble to <code>w</code>.\nWrite <code>func</code> to <code>w</code> as equivalent text. Use <code>isa</code> to emit …\nWrite the given <code>inst</code> to <code>w</code>.\nWrite the operands of <code>inst</code> to <code>w</code> with a prepended space.\nWrite the preamble to <code>w</code>. By default, this uses …")