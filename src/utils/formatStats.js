const terms = {
    attack: ['strong', 'weak'],
    defense: ['vulnerable', 'resistant']
};

const formatStats = (stats, type) =>
    Object.entries(stats).reduce((acc, [key, val]) => {
        if (val !== 1) {
            const termsIndex = val > 1 ? 0 : 1;
            const effectivenessKey = terms[type][termsIndex];
            if (!acc[effectivenessKey]) {
                acc[effectivenessKey] = {};
            }

            if (!acc[effectivenessKey][val]) {
                acc[effectivenessKey][val] = [];
            }

            acc[effectivenessKey][val].push(key);
        }

        return acc;
    }, {});

export default formatStats