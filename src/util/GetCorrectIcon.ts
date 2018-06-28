export const getCorrectIconForType = (type: string) => {
    // TODO: clean this up!
    const iconPrefix = 'pe-7s-';
    return (type === 'Finance' ? iconPrefix + 'cash' :
        (type === 'FireArms' ? iconPrefix + 'arc' :
            (type === 'Energy' ? iconPrefix + 'plug' : type === 'RawMaterials' ? iconPrefix + 'tools' :
                iconPrefix + 'rocket')));
};