import { PROMISE_CALL } from "fredux";
import api from "configs/api";

export const SAVE_CONFIG = "config/saveConfig";
export const EDIT_CONFIG = "config/editConfig";
export const SEARCH_CONFIG = "config/searchConfig";
export const SEARCH_CONFIGS = "config/searchConfigs";
export const COUNT_CONFIGS = "config/countConfigs";
export const DELETE_CONFIG = "config/deleteConfig";

export const saveConfig = (config) => ({
  type: SAVE_CONFIG,
  [PROMISE_CALL]: () => api.saveConfig(config),
});

export const editConfig = (config) => ({
  type: EDIT_CONFIG,
  [PROMISE_CALL]: () => api.editConfig(config),
});

export const searchConfig = (id) => ({
  type: SEARCH_CONFIG,
  [PROMISE_CALL]: () => api.searchConfig(id),
});

export const searchConfigs = () => ({
  type: SEARCH_CONFIGS,
  [PROMISE_CALL]: () => api.searchConfigs(),
});

export const countConfigs = () => ({
  type: COUNT_CONFIGS,
  [PROMISE_CALL]: () => api.countConfigs(),
});

export const deleteConfig = (id) => ({
  type: DELETE_CONFIG,
  [PROMISE_CALL]: () => api.deleteConfig(id),
});