export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addUser' : IDL.Func([IDL.Text, IDL.Text], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };
