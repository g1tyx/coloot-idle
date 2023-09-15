import Decimal from "break_infinity.js";
import type Player from "../player/player";
import { getGame } from "../singleton";
import type { SaverLoader } from "../saveload/saveload";

export const CRYSTAL_BASE_REQUIRED_LEVEL = 20;

export interface PrestigeCrystalData {
    title: string,
    description: string,
    statIcon: string,
}

export abstract class PrestigeCrystal implements SaverLoader {
    data: PrestigeCrystalData
    /**
     * Increases by investing Artifacts
     */
    level: number = 0;

    /**
     * The Level the player had when investing
     */
    investedPlayerLevel: number = CRYSTAL_BASE_REQUIRED_LEVEL;

    constructor(data: PrestigeCrystalData) {
        this.data = data;
    }

    abstract getLevels(playerLevel: number): number;

    abstract getEffect(level: number): Decimal;

    get effect(): Decimal {
        return this.getEffect(this.level);
    }

    canInvest(player: Player): boolean {
        return this.getNewLevels(player) > 0;
    }

    getNewLevels(player: Player): number {
        return this.getLevels(player.level) - this.level;
    }

    invest(player: Player) {
        if(this.canInvest(player)) {
            const arena = getGame().arena;
            this.level += this.getNewLevels(player);
            this.investedPlayerLevel = Math.max(this.investedPlayerLevel, player.level);
            player.reset();
            arena.reset();
        }
    }

    reset() {
        this.level = 0;
    }

    save() {
        return {
            level: this.level,
        };
    }

    load(data: any): void {
        this.level = data.level;
    }
}

export class PrestigeCrystalPower extends PrestigeCrystal {
    constructor() {
        super({
            title: "Power",
            description: "Increases Damage dealt",
            statIcon: "./images/stat/power.png",
        });
    }

    getLevels(playerLevel: number): number {
        return Math.max(0, playerLevel - CRYSTAL_BASE_REQUIRED_LEVEL);
    }

    getEffect(level: number): Decimal {
        return Decimal.pow(2, level / 12.5).mul(level >= 1 ? 1.25 : 1);
    }
}

export class PrestigeCrystalRarity extends PrestigeCrystal {
    constructor() {
        super({
            title: "Rarity",
            description: "Increases the Rarity of found Equipment",
            statIcon: "./images/stat/rarity.png",
        });
    }

    getLevels(playerLevel: number): number {
        return Math.max(0, playerLevel - CRYSTAL_BASE_REQUIRED_LEVEL);
    }

    getEffect(level: number): Decimal {
        return Decimal.pow(10, level / 25).mul(level >= 1 ? 1.5 : 1);
    }
}

export class PrestigeCrystalMagic extends PrestigeCrystal {
    constructor() {
        super({
            title: "Magic",
            description: "Increases Magic Find",
            statIcon: "./images/stat/magicfind.png",
        });
    }

    getLevels(playerLevel: number): number {
        return Math.max(0, playerLevel - CRYSTAL_BASE_REQUIRED_LEVEL);
    }

    getEffect(level: number): Decimal {
        return Decimal.pow(2, level / 25).mul(level >= 1 ? 1.1 : 1);
    }
}