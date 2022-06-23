class Hero extends Fighter {
    constructor(name, strength, dexterity, image, x, y, weapon=null, shield=null) {
        super(name, strength, dexterity, image, x, y);
        this.weapon = weapon;
        this.shield = shield;
    }

    getDamage() {
        return this.weapon ?
          this.strength + this.weapon.damage :
          this.strength;
      }
    
      getDefense() {
        return this.shield ?
          this.dexterity + this.shield.protection :
          this.dexterity;
      }
}