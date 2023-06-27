import { Component, OnInit } from '@angular/core';

import database from '../../../assets/tormenta/database.json';
import pericias from '../../../assets/tormenta/pericias.json';
import magic_base from '../../../assets/tormenta/magics.json';
import char_export from '../../../assets/tormenta/char_export.json';

@Component({
  selector: 'app-tormenta',
  templateUrl: './app-tormenta.component.html',
  styleUrls: ['./app-tormenta.component.scss']
})
export class AppTormentaComponent implements OnInit {

  title = 'tormenta20-builder';
  
  character = char_export["personagem"];
  races = database["raça"];
  classes = database["classe"];
  origins = database["origem"];
  powers = database["poder"];
  gods = database["deus"];
  magic = magic_base["magias"];

  expertises = pericias["pericias"];

  levels = Array.from({length: 20}, (_, i) => i+1);

  race: any; class: any; origin: any; god: any; level: any; half_level: any;
  expertises_table: any; extra_attributes: any; proeficiencies: any; origin_bonus: any; default_powers: any; chosen_powers: any; chosen_magic: any; chosen_magic_schools: any; chosen_weapons: any; chosen_armor: any; chosen_shield: any;
  extra_attributes_import: any; modifiers_import: any; chosen_weapons_import: any; chosen_armor_import: any; chosen_shield_import: any; chosen_powers_import: any; chosen_magic_import: any; chosen_magic_schools_import: any; expertises_import: any;

  defense_data = [0, 0, 0];

  attack_dice = 0; attack_expertise = 0; attack_total = 0; attack_active = true;
  damage_total = 0; damage_dice = 0; damage_mod = 0; damage_bonus = 0;

  total_expertises = 0; life_points = 0; mana_points = 0; defense_points = 0; extra_defense_points = 0;
  attributes_modifiers = [0]; attributes_values = [0];

  async ngOnInit() {
    if(screen.width < 1200) {
      let main_element = document.getElementsByClassName("col-sm-7")[0];
      let main_table = document.getElementsByClassName("col-sm-5")[0];

      main_element.classList.remove("col-sm-7");
      main_table.classList.remove("col-sm-7");
      main_element.classList.add("col-sm-12");
      main_table.classList.add("col-sm-12");
    }

    setTimeout(() => {
      this.level = 1;
      this.half_level = 1;
      this.race = this.races[0].nome;
      this.class = this.classes[0].nome;
      this.origin = this.origins[0].nome;
      this.god = this.gods[0].nome;
    }, 5);
  }

  set_char_data() {
    this.character.raca = this.race;
    this.character.classe = this.class;
    this.character.origem = this.origin;
    this.character.deus = this.god;
    this.character.nivel = this.level;
    this.character.pericias = this.expertises_table;
    this.character.atributos = [this.attributes_modifiers, this.attributes_values];
    this.character.atributos_extra = this.extra_attributes;
    this.character.escudo = this.chosen_shield;
    this.character.armadura = this.chosen_armor;
    this.character.armas = this.chosen_weapons;
    this.character.magias = this.chosen_magic;
    this.character.escolas_magia = this.chosen_magic_schools;
    this.character.poderes = this.chosen_powers;
    this.character.defesa_extra = this.extra_defense_points;
  }

  updateHalfLevel() {
    setTimeout(() => {
      this.half_level = Math.floor(this.level / 2);
      if(this.level == 1) this.half_level = 1;
    }, 5);
  }

  onTotalExpertises(outputResult: any) {
    this.total_expertises = outputResult;
  }

  onLifePoints(outputResult: any) {
    this.life_points = outputResult;
  }

  onManaPoints(outputResult: any) {
    this.mana_points = outputResult;
  }

  onAttributesModifiers(outputResult: any) {
    this.attributes_modifiers = outputResult; 
  }

  onAttributesValues(outputResult: any) {
    this.attributes_values = outputResult; 
  }

  onExpertisesTable(outputResult: any) {
    this.expertises_table = outputResult; 
  }

  onProeficiencies(outputResult: any) {
    this.proeficiencies = outputResult;
  }

  onOriginBonus(outputResult: any) {
    this.origin_bonus = outputResult;
  }

  onDefaultPowers(outputResult: any) {
    this.default_powers = outputResult;
  }

  onChosenPowers(outputResult: any) {
    this.chosen_powers = outputResult;
  }

  onChosenMagic(outputResult: any) {
    this.chosen_magic = outputResult;
  }

  onChosenMagicSchool(outputResult: any) {
    this.chosen_magic_schools = outputResult;
  }

  onChosenWeapons(outputResult: any) {
    this.chosen_weapons = outputResult;
  }

  onChosenArmor(outputResult: any) {
    this.chosen_armor = outputResult;
  }

  onChosenShield(outputResult: any) {
    this.chosen_shield = outputResult;
  }

  onExtraAttributes(outputResult: any) {
    this.extra_attributes = outputResult;
  }

}
