import { ET } from './et'
import { GE } from './ge'
import { GH } from './gh'
import { ID } from './id'
import { UG } from './ug'
import { RU } from './ru'
import { IR } from './ir'
import { TN } from './tn'
import { ZA } from './za'
import { CM } from './cm'
import { IN } from './in'
import { IQ } from './iq'
import { XK } from './xk'
import { NG } from './ng'
import { TG } from './tg'
import { EG } from './eg'
import { JO } from './jo'
import { SY } from './sy'
import { CL } from './cl'
import { BO } from './bo'
import { DZ } from './dz'
import { MA } from './ma'
import { TZ } from './tz'
import { US } from './us'
import { ES } from './es'
import { CA } from './ca'
import { AZ } from './az'
import { PK } from './pk'
import { NP } from './np'
import { AT } from './at'
import { CI } from './ci'
import { BY } from './by'
import { SD } from './sd'
import { ZM } from './zm'
import { BG } from './bg'
import { TR } from './tr'
import { PH } from './ph'
import { VU } from './vu'
import { SN } from './sn'
import { VN } from './vn'
import { ML } from './ml'
import { BD } from './bd'
import { CN } from './cn'
import { FR } from './fr'
import { BA } from './ba'
import { LR } from './lr'
import { YT } from './yt'
import { GQ } from './gq'
import { ER } from './er'
import { GU } from './gu'
import { FM } from './fm'
import { KH } from './kh'
import { UA } from './ua'
import { SC } from './sc'
import { CZ } from './cz'
import { PL } from './pl'
import { MM } from './mm'
import { GB } from './gb'
import { DK } from './dk'
import { KE } from './ke'
import { DE } from './de'
import { NE } from './ne'
import { MY } from './my'
import { MV } from './mv'
import { BF } from './bf'
import { BT } from './bt'
import { IT } from './it'
import { GR } from './gr'
import { EE } from './ee'
import { GN } from './gn'
import { FI } from './fi'
import { SE } from './se'
import { FJ } from './fj'
import { FO } from './fo'
import { BJ } from './bj'
import { WF } from './wf'
import { NL } from './nl'
import { IE } from './ie'
import { MD } from './md'
import { GF } from './gf'
import { KI } from './ki'
import { PY } from './py'
import { CY } from './cy'
import { CH } from './ch'
import { BR } from './br'
import { CO } from './co'
import { IM } from './im'
import { AF } from './af'
import { IL } from './il'
import { LA } from './la'
import { PG } from './pg'
import { HR } from './hr'
import { HT } from './ht'
import { HU } from './hu'
import { AM } from './am'
import { NA } from './na'
import { IS } from './is'
import { JP } from './jp'
import { JM } from './jm'
import { UZ } from './uz'
import { ZW } from './zw'
import { TH } from './th'
import { CV } from './cv'
import { CD } from './cd'
import { KZ } from './kz'
import { GL } from './gl'
import { AO } from './ao'
import { KR } from './kr'
import { SL } from './sl'
import { KG } from './kg'
import { VA } from './va'
import { LU } from './lu'
import { LT } from './lt'
import { LV } from './lv'
import { GM } from './gm'
import { MX } from './mx'
import { MU } from './mu'
import { MG } from './mg'
import { MZ } from './mz'
import { MH } from './mh'
import { NZ } from './nz'
import { MK } from './mk'
import { MN } from './mn'
import { MT } from './mt'
import { NR } from './nr'
import { NO } from './no'
import { NU } from './nu'
import { SS } from './ss'
import { MW } from './mw'
import { AW } from './aw'
import { PW } from './pw'
import { LB } from './lb'
import { GA } from './ga'
import { PE } from './pe'
import { GT } from './gt'
import { EC } from './ec'
import { RE } from './re'
import { BI } from './bi'
import { RO } from './ro'
import { SB } from './sb'
import { RW } from './rw'
import { CF } from './cf'
import { LK } from './lk'
import { SK } from './sk'
import { SI } from './si'
import { WS } from './ws'
import { SO } from './so'
import { AL } from './al'
import { RS } from './rs'
import { SR } from './sr'
import { TL } from './tl'
import { TJ } from './tj'
import { TM } from './tm'
import { TK } from './tk'
import { TO } from './to'
import { TW } from './tw'
import { TV } from './tv'
import { PF } from './pf'
import { SX } from './sx'
import { BE } from './be'
import { AU } from './au'
import { KM } from './km'
import { SA } from './sa'
import { YE } from './ye'
import { HK } from './hk'

export const localeCountryMap = { ...ET, ...GE, ...GH, ...ID, ...UG, ...RU, ...IR, ...TN, ...ZA, ...CM, ...IN, ...IQ, ...XK, ...NG, ...TG, ...EG, ...JO, ...SY, ...CL, ...BO, ...DZ, ...MA, ...TZ, ...US, ...ES, ...CA, ...AZ, ...PK, ...NP, ...AT, ...CI, ...BY, ...SD, ...ZM, ...BG, ...TR, ...PH, ...VU, ...SN, ...VN, ...ML, ...BD, ...CN, ...FR, ...BA, ...LR, ...YT, ...GQ, ...ER, ...GU, ...FM, ...KH, ...UA, ...SC, ...CZ, ...PL, ...MM, ...GB, ...DK, ...KE, ...DE, ...NE, ...MY, ...MV, ...BF, ...BT, ...IT, ...GR, ...EE, ...GN, ...FI, ...SE, ...FJ, ...FO, ...BJ, ...WF, ...NL, ...IE, ...MD, ...GF, ...KI, ...PY, ...CY, ...CH, ...BR, ...CO, ...IM, ...AF, ...IL, ...LA, ...PG, ...HR, ...HT, ...HU, ...AM, ...NA, ...IS, ...JP, ...JM, ...UZ, ...ZW, ...TH, ...CV, ...CD, ...KZ, ...GL, ...AO, ...KR, ...SL, ...KG, ...VA, ...LU, ...LT, ...LV, ...GM, ...MX, ...MU, ...MG, ...MZ, ...MH, ...NZ, ...MK, ...MN, ...MT, ...NR, ...NO, ...NU, ...SS, ...MW, ...AW, ...PW, ...LB, ...GA, ...PE, ...GT, ...EC, ...RE, ...BI, ...RO, ...SB, ...RW, ...CF, ...LK, ...SK, ...SI, ...WS, ...SO, ...AL, ...RS, ...SR, ...TL, ...TJ, ...TM, ...TK, ...TO, ...TW, ...TV, ...PF, ...SX, ...BE, ...AU, ...KM, ...SA, ...YE, ...HK }

export type LocaleCountryMap = typeof localeCountryMap
export type Locale = keyof LocaleCountryMap
export type Country = LocaleCountryMap[Locale]