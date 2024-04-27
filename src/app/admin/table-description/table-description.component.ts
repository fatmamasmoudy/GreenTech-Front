import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjectDesc } from '../models/ProjectDesc';
import { ProjectDescription } from '../models/ProjectDescription';
import { MatStepper } from '@angular/material/stepper';
import { ProjectDescriptionService } from 'app/services/project_description/project-description.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin-table-description',
  templateUrl: './table-description.component.html',
  styleUrls: ['./table-description.component.css']
})
export class AdminTableDescriptionComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  projectDto = new ProjectDesc();
  projectDescription: ProjectDescription = this.projectDto.projectDescription;
  selectedMoisture:any
  selectedStatus:any
  selectedSoil:any
  continents = [
    {
      name: 'AFRICA',
      countries: [
        'ALGERIA',
        'ANGOLA',
        'BENIN',
        'BOTSWANA',
        'BURKINA FASO',
        'BURUNDI',
        'CAPE VERDE',
        'CAMEROON',
        'CENTRAL AFRICAN REPUBLIC',
        'CHAD',
        'COMOROS',
        'DEMOCRATIC REPUBLIC OF THE CONGO',
        'DJIBOUTI',
        'EGYPT',
        'EQUATORIAL GUINEA',
        'ERITREA',
        'ETHIOPIA',
        'GABON',
        'GAMBIA',
        'GHANA',
        'GUINEA',
        'GUINEA-BISSAU',
        'IVORY COAST',
        'KENYA',
        'LESOTHO',
        'LIBERIA',
        'LIBYA',
        'MADAGASCAR',
        'MALAWI',
        'MALI',
        'MAURITANIA',
        'MAURITIUS',
        'MAYOTTE',
        'MOROCCO',
        'MOZAMBIQUE',
        'NAMIBIA',
        'NIGER',
        'NIGERIA',
        'RÉUNION',
        'REPUBLIC OF THE CONGO',
        'RWANDA',
        'SÃO TOMÉ AND PRÍNCIPE',
        'SENEGAL',
        'SEYCHELLES',
        'SIERRA LEONE',
        'SOMALIA',
        'SOUTH AFRICA',
        'SOUTH SUDAN',
        'SUDAN',
        'SWAZILAND',
        'TANZANIA',
        'TOGO',
        'TUNISIA',
        'UGANDA',
        'WESTERN SAHARA',
        'ZAMBIA',
        'ZIMBABWE',
      ],
    },
    {
      name: 'EUROPE',
      countries: [
        'ALBANIA',
        'ANDORRA',
        'AUSTRIA',
        'BELARUS',
        'BELGIUM',
        'BOSNIA AND HERZEGOVINA',
        'BULGARIA',
        'CROATIA',
        'CYPRUS',
        'CZECH REPUBLIC',
        'DENMARK',
        'ESTONIA',
        'FINLAND',
        'FRANCE',
        'GERMANY',
        'GREECE',
        'HUNGARY',
        'ICELAND',
        'IRELAND',
        'ITALY',
        'LATVIA',
        'LIECHTENSTEIN',
        'LITHUANIA',
        'LUXEMBOURG',
        'MACEDONIA',
        'MALTA',
        'MOLDOVA',
        'MONACO',
        'MONTENEGRO',
        'NETHERLANDS',
        'NORWAY',
        'POLAND',
        'PORTUGAL',
        'ROMANIA',
        'RUSSIA',
        'SAN MARINO',
        'SERBIA',
        'SLOVAKIA',
        'SLOVENIA',
        'SPAIN',
        'SWEDEN',
        'SWITZERLAND',
        'UKRAINE',
        'UNITED KINGDOM',
        'VATICAN CITY',
      ],
    },
    {
      name: 'ASIA',
      countries: [
        'AFGHANISTAN',
        'ARMENIA',
        'AZERBAIJAN',
        'BAHRAIN',
        'BANGLADESH',
        'BHUTAN',
        'BRUNEI',
        'CAMBODIA',
        'CHINA',
        'CYPRUS',
        'GEORGIA',
        'INDIA',
        'INDONESIA',
        'IRAN',
        'IRAQ',
        'JAPAN',
        'JORDAN',
        'KAZAKHSTAN',
        'KUWAIT',
        'KYRGYZSTAN',
        'LAOS',
        'LEBANON',
        'MALAYSIA',
        'MALDIVES',
        'MONGOLIA',
        'MYANMAR',
        'NEPAL',
        'NORTH KOREA',
        'OMAN',
        'PAKISTAN',
        'PALESTINE',
        'PHILIPPINES',
        'QATAR',
        'SAUDI ARABIA',
        'SINGAPORE',
        'SOUTH KOREA',
        'SRI LANKA',
        'SYRIA',
        'TAIWAN',
        'TAJIKISTAN',
        'THAILAND',
        'TIMOR-LESTE',
        'TURKEY',
        'TURKMENISTAN',
        'UNITED ARAB EMIRATES',
        'UZBEKISTAN',
        'VIETNAM',
        'YEMEN'
      ],
    },
    {
      name: 'NORTH AMERICA',
      countries: [
        'ANTIGUA AND BARBUDA',
        'BAHAMAS',
        'BARBADOS',
        'BELIZE',
        'CANADA',
        'COSTA RICA',
        'CUBA',
        'DOMINICA',
        'DOMINICAN REPUBLIC',
        'EL SALVADOR',
        'GRENADA',
        'GUATEMALA',
        'HAITI',
        'HONDURAS',
        'JAMAICA',
        'MEXICO',
        'NICARAGUA',
        'PANAMA',
        'SAINT KITTS AND NEVIS',
        'SAINT LUCIA',
        'SAINT VINCENT AND THE GRENADINES',
        'TRINIDAD AND TOBAGO',
        'UNITED STATES',
      ],
    },
    {
      name: 'SOUTH AMERICA',
      countries: [
        'ARGENTINA',
        'BOLIVIA',
        'BRAZIL',
        'CHILE',
        'COLOMBIA',
        'ECUADOR',
        'GUYANA',
        'PARAGUAY',
        'PERU',
        'SURINAME',
        'URUGUAY',
        'VENEZUELA',
      ],
    },
    {
      name: 'AUSTRALIA',
      countries: [
        'AUSTRALIA',
        'FIJI',
        'KIRIBATI',
        'MARSHALL ISLANDS',
        'MICRONESIA',
        'NAURU',
        'NEW ZEALAND',
        'PALAU',
        'PAPUA NEW GUINEA',
        'SAMOA',
        'SOLOMON ISLANDS',
        'TONGA',
        'TUVALU',
        'VANUATU',
      ],
    },
  ];
  selectedSource: string = '';
  co2Result: number = 0;
  ch4Result: number = 0;
  n2oResult: number = 0;
  selectedContinent = 'ASIA';
  selectedCountry = null;

  constructor(
    private projectService: ProjectDescriptionService,
    private cdr: ChangeDetectorRef,
    private _formBuilder: FormBuilder
  ) { }
  countries = this.continents.find(
    (continent) => continent.name === this.selectedContinent
  ).countries;

  ngOnInit(): void {

    console.log(this.projectDto)


    this.selectedContinent = this.continents[0]?.name;
    this.updateResults();
    this.selectedSource = '100yr SAR';
    console.log(this.selectedSource);
    this.onContinentChange();
  }

  onContinentChange() {
    console.log('onContinentChange called');


    const selectedContinentObj = this.continents.find(
      (continent) => continent.name === this.selectedContinent
    );

    if (selectedContinentObj) {
      this.countries = selectedContinentObj.countries;
    } else {
      this.countries = [];
    }

    this.selectedCountry = null;

  }

  updateResults() {
    console.log("change happened");
    switch (this.selectedSource) {
      case '_100_YR_SAR':
        this.co2Result = 1;
        this.ch4Result = 21;
        this.n2oResult = 310;
        break;
      case '_100_YR_AR4':
        this.co2Result = 1;
        this.ch4Result = 25;
        this.n2oResult = 298;
        break;
      case '_100_YR_AR5_WITH_CC_FEEDBACK':
        this.co2Result = 1;
        this.ch4Result = 34;
        this.n2oResult = 298;
        break;
      default:
        this.co2Result = 0;
        this.ch4Result = 0;
        this.n2oResult = 0;
        break;
    }
  }

  saveProject() {
    this.projectDto.projectDescription.co2 = this.co2Result
    this.projectDto.projectDescription.ch4 = this.ch4Result
    this.projectDto.projectDescription.n2o = this.n2oResult
    this.projectDto.projectDescription.country = this.selectedCountry
    this.projectDto.projectDescription.continent = this.selectedContinent
    this.projectDto.projectDescription.source = this.selectedSource
    this.projectDto.projectDescription.moisture = this.selectedMoisture
    this.projectDto.projectDescription.projectStatus = this.selectedStatus
    this.projectDto.projectDescription.soilType = this.selectedSoil
    console.log("projectDto betofe", this.projectDto)

    this.projectService.createProjectDescription(this.projectDto).subscribe(data => {
      console.log("********",data);
      Swal.fire({
        title: "Succès !",
        text: "Votre cours a été ajouté avec succès.",
        icon: "success"
      })
    },
      error => console.log(error));
  }

  onSubmit() {

    console.log(this.selectedCountry)
    this.projectDto.eventType = ""
    console.log("obj to save", this.projectDto);
    this.saveProject();
  };
}
