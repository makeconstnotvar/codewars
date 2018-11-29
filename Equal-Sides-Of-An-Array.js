function findEvenIndex(arr) {
  let left = {};
  let right = {};
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let j = arr.length - i - 1;
    leftSum += arr[i];
    rightSum += arr[j];
    left[i] = leftSum;
    right[j] = rightSum;
  }
  let resp = Object.keys(left).find(k => left[k] === right[k]);
  return resp || -1;
}


let data1 = [-6094, -2441, 2246, -3643, -4484, 5760, -646, 420, 7872, -2767, -4005, 9296, 6249, -2611, 811, -2247, 84, 743, -2222, 5571, -9049, -6329, -3789, -7737, -1858, 6030, 1711, -3324, -5196, -5343, 5064, 1121, 3128, -3866, 3587];
let data = [-1792, -6126, -8483, -6909, -1045, 1848, -9056, 289, 3545, 6410, 4955, 3203, 426, 4986, 2812, 1412, 7377, 2612, -9916, 5311, 398, 9596, 40, -8172, 5295, -1430, 4557, 8005, 7877, -7105, 2468, 2611, 5798, -4389, 9242, 4971, 8877, 1184, 4557, -4714, 9038, -3178, 4576, 7487, 9771, 7007, -3186, -1823, -4928, -4118, -1634, -439, 4381, -5455, 1997, 3495, 2688, 5716, 6757, 7355, 2065, 9316, -8923, -1524, -616, -7035, 5220, -7947, -3852, 976, 9271, -9670, -2223, -7008, -655, 9737, -970, -2723, -7362, 6741, -8072, 7864, -4198, -3400, -3110, -8023, 2747, -5743, 6175, -8015, -5194, 9196, 7657, 9300, -1385, 8576, 2945, 8716, 6640, 7214, 2860, 3616, 9790, -630, -1654, -4870, -2539, -415, 3693, 5736, 2812, -814, 3370, -4694, 1461, 1343, -3282, 7094, 8338, -5852, -4376, 9116, 970, 7253, -5324, -3285, -6980, 2003, -1660, 2315, -1335, 7309, 2782, -5705, -6730, -7836, -2489, 4676, 5840, 5927, 4305, -9055, -7908, 5226, 1565, 8573, 7741, 2981, 2369, 3855, -2017, 389, -7059, -2594, 4925, -5910, -3782, 4409, -8809, 1753, -8565, 1028, -5478, -9250, -1412, 7821, 1339, -1939, -9659, 2554, 3035, -5658, 1201, -7056, 1325, 5172, 9680, 7113, 1750, 9616, -9662, 4173, 8001, 6492, 5299, -6651, 8794, -9208, -4216, -5247, -150, -4747, 8993, -7232, 9444, -4336, 1408, -2740, 7311, -193, 8255, 7452, -2107, 9659, 6219, 9389, -8996, 7214, -9774, -1518, 4809, -381, 5519, -6670, 9924, -1702, 5944, -1151, -6498, -4122, -4081, 9689, -8323, -4352, -6938, 5075, -2034, 2076, 2506, 868, 3716, 8922, 9419, 7689, 7065, 311, -8846, 96, -8031, -1028, 9041, 1842, -2457, 9979, 779, 232, 1623, 4588, -9475, -5027, -8058, -4276, -999, -9693, 3652, 4108, -8888, 3307, 6492, -9235, 6460, 1972, 4995, 5575, 3620, 8298, 5951, 977, 5740, 9094, 6993, 1270, 8833, 3716, -7572, 1321, 5760, 5941, 2380, -4583, 2458, 1806, 5965, -8134, 7984, 2777, 8852, -8158, 1642, -4224, 1450, -8538, 242, 9385, -8607, 7929, 6681, 5969, 9597, -1384, 4177, -6146, 57, -7524, -2217, 6259, 4481, 5469, -3495, -2243, -7269, 22, 3585, 8936, 7643, 8215, 7414, 3158, 5395, -6180, 9729, -3153, -3966, 3443, 8746, 617, 410, -5478, -1829, -9585, -5140, -9995, -374, 441, 711, 4937, -3272, 596, 5449, -3055, -9468, -8193, -2243, -8469, 549, 3145, 5495, -5012, 4008, -7610, 7144, -4644, 9209, 3783, 8999, 1251, -8056, -5506, -9935, 165, -4779, -8295, 1737, -611, -8605, -7174, 8233, 7091, -3019, -8252, -3029, 4482, 8412, -4870, 7190, -6064, 955, 8789, -4642, -6837, 9044, 2492, -7605, 1025, 6237, 2837, 5155, 6810, 9170, -7910, 6379, -3083, -5932, -7986, 6446, 7570, -1028, 2659, 1178, 1387, 8672, -3763, 1840, 3462, 2669, 1792, -7326, 5294, -7574, 5025, -7050, 9368, -5142, 4090, 2030, 3930, -1372, 5525, -3444, 9626, -1198, 7817, -4729, 903, -9117, 2377, 5032, 2, 9687, -8589, 548, 7518, -9501, 3222, -6555, -7204, 2456, 5719, -3456, 3111, -1435, 672, -1959, 7273, 6003, 9706, 266, 3038, -737, -2318, 348, 1836, -116, 1590, -5339, 9074, 8696, 1399, 3179, -982, -1741, -7746, 1425, -4934, -8094, 5276, 5244, 7789, 9447, 677, -5611, -391, -2049, -5266, 4249, -8043, 7131, 895, -3360, -2439, -6374, -2801, -1944, 9799, -6115, -5235, -27, 5637, 4772, -392794];

let resp = findEvenIndex(data);
console.log(resp);