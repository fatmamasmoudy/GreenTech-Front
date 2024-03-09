import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjectDesc } from '../models/ProjectDesc';
import { ProjectDescription } from '../models/ProjectDescription';
import { MatStepper } from '@angular/material/stepper';
import { ProjectDescriptionService } from 'app/services/project_description/project-description.service';

@Component({
  selector: 'app-admin-table-description',
  templateUrl: './table-description.component.html',
  styleUrls: ['./table-description.component.css']
})
export class AdminTableDescriptionComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  projectDto:ProjectDesc = new ProjectDesc();
  projectDescription:ProjectDescription = this.projectDto.projectDescription;
  mainFormGroup:FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  continents = [
    {
      name: 'Africa',
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
      name: 'Europe',
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
      name: 'Asia',
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
      name: 'North America',
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
      name: 'South America',
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
      name: 'Australia',
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
  selectedContinent = 'Asia';
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
    this.firstFormGroup = this._formBuilder.group({
      userName: [''],
      projectName: [''],
      projectCode: [''],
      projectCost: [''],
      executingAgency: [''],
    });

    this.secondFormGroup = this._formBuilder.group({
      totalDurationOfAccounting: [''],
      implementationPhase: [''],
      capitalizationPhase: [''],
    });

    this.mainFormGroup = this._formBuilder.group({
      firstFormGroup: this.firstFormGroup,
      secondFormGroup: this.secondFormGroup,
      // Add other form groups as needed
    });

  

    this.selectedContinent = this.continents[0]?.name;
    this.updateResults();
    this.selectedSource = '100yr SAR';
    console.log(this.selectedSource);
    this.onContinentChange();
  }

  onContinentChange() {
    console.log('onContinentChange called');
    this.cdr.detectChanges();

    const selectedContinentObj = this.continents.find(
      (continent) => continent.name === this.selectedContinent
    );

    if (selectedContinentObj) {
      this.countries = selectedContinentObj.countries;
    } else {
      this.countries = [];
    }

    this.selectedCountry = null;
    this.cdr.detectChanges();
  }

  updateResults() {
    console.log("change happened");
    switch (this.selectedSource) {
      // Remaining switch cases unchanged
    }
  }

  saveProject() {
    this.projectService.createProjectDescription(this.projectDto).subscribe(data => {
      console.log(data);
    },
      error => console.log(error));
  }

  onSubmit() {
    console.log(this.mainFormGroup.value);

    console.log(this.projectDto);
    this.saveProject();
  };
}
