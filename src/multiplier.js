import pokemonTypes from './data/type-effectiveness2.json';
import { MOST_DAMAGE, LESS_DAMAGE, LEAST_DAMAGE } from './utils/constants';

export default function getMultipliers(types) {
    const multipliers = {
        defense: {},
        attack: {}
    };
    types.forEach((type) => {
        const typeData = pokemonTypes[type];

        const most_damage_to = typeData.superEffectiveAgainst[MOST_DAMAGE];
        const less_damage_to = typeData.notVeryEffectiveAgainst[LESS_DAMAGE];
        const least_damage_to = typeData.notVeryEffectiveAgainst[LEAST_DAMAGE];

        const most_damage_from = typeData.weakTo[MOST_DAMAGE];
        const less_damage_from = typeData.resistantTo[LESS_DAMAGE];
        const least_damage_from = typeData.resistantTo[LEAST_DAMAGE];

        least_damage_to?.forEach((type) => {
            if (multipliers.attack.hasOwnProperty(type)) {
                multipliers.attack[type] =
                    multipliers.attack[type] * LEAST_DAMAGE;
            } else {
                multipliers.attack[type] = LEAST_DAMAGE;
            }
        });
        least_damage_from?.forEach((type) => {
            if (multipliers.defense.hasOwnProperty(type)) {
                multipliers.defense[type] =
                    multipliers.defense[type] * LEAST_DAMAGE;
            } else {
                multipliers.defense[type] = LEAST_DAMAGE;
            }
        });
        less_damage_to?.forEach((type) => {
            if (multipliers.attack.hasOwnProperty(type)) {
                multipliers.attack[type] =
                    multipliers.attack[type] * LESS_DAMAGE;
            } else {
                multipliers.attack[type] = LESS_DAMAGE;
            }
        });
        less_damage_from?.forEach((type) => {
            if (multipliers.defense.hasOwnProperty(type)) {
                multipliers.defense[type] =
                    multipliers.defense[type] * LESS_DAMAGE;
            } else {
                multipliers.defense[type] = LESS_DAMAGE;
            }
        });
        most_damage_to?.forEach((type) => {
            if (multipliers.attack.hasOwnProperty(type)) {
                multipliers.attack[type] =
                    multipliers.attack[type] * MOST_DAMAGE;
            } else {
                multipliers.attack[type] = MOST_DAMAGE;
            }
        });
        most_damage_from?.forEach((type) => {
            if (multipliers.defense.hasOwnProperty(type)) {
                multipliers.defense[type] =
                    multipliers.defense[type] * MOST_DAMAGE;
            } else {
                multipliers.defense[type] = MOST_DAMAGE;
            }
        });
    });

    return multipliers;
}
