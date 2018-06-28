
export const getCorrectIconForType = (type: string) => {
   return (type === 'Finance' ? 'cash' :
        (type === 'FireArms' ? 'arc' :
            (type === 'Energy' ? 'plug' : type === 'RawMaterials' ? 'tools' : 'rocket')));
};