export const getEnvVariable = (variableName, isMandatory = true) => {
  const envVariable = process.env[variableName];
  if (isMandatory && !envVariable)
    throw new Error(`Variable "${variableName}" does not exists`);

  return envVariable;
};
