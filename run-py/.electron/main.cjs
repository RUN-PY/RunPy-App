import { ipcMain } from "electron";
import { runPython } from "./pythonRunner";

ipcMain.handle("run-python", async (_event, code: string) => {
  try {
    const output = await runPython(code);
    return { output };
  } catch (err) {
    return { error: String(err) };
  }
});
