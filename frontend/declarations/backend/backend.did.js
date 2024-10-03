export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'storeCredentials' : IDL.Func([IDL.Text, IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
