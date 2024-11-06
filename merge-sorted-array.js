const merge1 = (nums1, m, nums2, n) => {
    m > 0 && m--;
    n > 0 && n--;
    for (let i = nums1.length - 1; i >= 0; i--) {
        if (m<0 || nums2[n] > nums1[m]) {
            nums1[i] = nums2[n];
             n--;
             if(n<0)
                 break;
        } else {
            nums1[i] = nums1[m];
            m--;
        }
    }
    console.log(1)
};

const merge2 = (nums1, m, nums2, n) => {
    let i = nums1.length - 1;
    while (n > 0) {
        if (m === 0 || nums2[n - 1] > nums1[m - 1]) {
            nums1[i--] = nums2[n - 1];
            n--;
        } else {
            nums1[i--] = nums1[m - 1];
            m--;
        }
    }
};
//merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
//merge([0], 0, [1], 1)
merge([2, 0], 1, [1], 1)
//merge([1,2,4,5,6,0], 5, [3], 1)