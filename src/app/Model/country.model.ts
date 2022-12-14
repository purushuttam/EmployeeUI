export interface country {
    id: number
    name: string
    iso3: string
    iso2: string
    numeric_code: string
    phone_code: string
    capital: string
    currency: string
    currency_name: string
    currency_symbol: string
    tld: string
    native: string
    region: string
    subregion: string
    timezones: timezones[]
    translations: translations
    latitude: string
    longitude: string
    emoji: string
    emojiU: string
  }

  export interface timezones {
    zoneName: string
    gmtOffset: number
    gmtOffsetName: string
    abbreviation: string
    tzName: string
  }

  export interface translations {
    kr: string
    ptBR: any
    pt: string
    nl: string
    hr: string
    fa: string
    de: string
    es: string
    fr: string
    ja: string
    it: string
    cn: string
    tr: string
  }

  export interface state {
    id: number
    name: string
    country_id: number
    country_code: string
    country_name: string
    state_code: string
    latitude: string
    longitude: string
  }

  export interface city {
    id: number
    name: string
    state_id: number
    state_code: string
    state_name: string
    country_id: number
    country_code: string
    country_name: string
    latitude: string
    longitude: string
    wikiDataId: string
  }
