import { spawn } from "child_process";

export function runPython(code: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const process = spawn("python3", ["-c", code]);

    let result = "";
    let error = "";

    process.stdout.on("data", (data) => {
      result += data.toString();
    });

    process.stderr.on("data", (data) => {
      error += data.toString();
    });

    process.on("close", () => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}
