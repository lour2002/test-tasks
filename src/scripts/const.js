export const DEFAULT_CHART_OPTIONS = {
  title: {
    text: 'Показатели',
  },
  xAxis: {
    type: 'datetime'
  }
}

export const DEFAULT_FIELDS = [
  { key: "name", label: "Показатель" },
  { key: "diff", label: "Разница %" }
];

export const INDICATORS = {
  TRAFIC: "trafic",
  SENDING: "sending",
  DELIVERY: "delivery",
  OPENING: "opening",
  CONVERSION: "conversion",
  ANSWERS: "answers"
};

export const INDICATORS_LABLE = {};
INDICATORS_LABLE[INDICATORS.TRAFIC] = "Трафик";
INDICATORS_LABLE[INDICATORS.SENDING] = "Отправка";
INDICATORS_LABLE[INDICATORS.DELIVERY] = "Доставка";
INDICATORS_LABLE[INDICATORS.OPENING] = "Открытие";
INDICATORS_LABLE[INDICATORS.CONVERSION] = "Переходы";
INDICATORS_LABLE[INDICATORS.ANSWERS] = "Ответы";

export const DATA_REQUEST_URL = "/data";

export const AXIOS_CNFG = {
  baseURL: location.protocol + "//" + location.hostname + ":" + "3000"
};
