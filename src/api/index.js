/**
 * 定义与后端交互接口
 */

import ajax from './ajax';

export const getAllMeun = () => ajax('/getAllMeun');