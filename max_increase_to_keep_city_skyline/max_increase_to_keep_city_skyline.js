var grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]];
var increase_height = 0;

max_increase_to_keep_city_skyline(grid);

function max_increase_to_keep_city_skyline(inputArr){
    var left_to_right = [];
    var top_to_bottom = [];
    var vertical_array = [];

    for(var i = 0; i<inputArr.length; i++){
      var max = Math.max.apply(null, inputArr[i]);
      var obj = {
        location: inputArr[i].indexOf(max),
        max: max
      }
      left_to_right.push(obj);
    }
    // console.log('left to right: ', left_to_right);
    // debugger;

    for(var index = 0; index< inputArr[0].length; index++){
      var temp_array = [];
      for(var i_v = 0; i_v<inputArr.length; i_v++){
        temp_array.push(inputArr[i_v][index]);
      }
      // console.log('temp arr:',temp_array);
      var vertical_max = Math.max.apply(null, temp_array);
      var obj = {
        location:temp_array.indexOf(vertical_max),
        max: vertical_max,
      }
      top_to_bottom.push(obj);

    }
    // console.log('top_to_bottom: ', top_to_bottom);

    for(var outer=0; outer<inputArr.length; outer++){
      for(var inner=0; inner<inputArr[outer].length; inner++){
        var h_max = left_to_right[outer].max;
        var v_max = top_to_bottom[inner].max;
        var smaller_num = Math.min(h_max, v_max);
        var factor = smaller_num - inputArr[outer][inner];
        increase_height += factor;
      }
    }
    console.log('increase_height:', increase_height)
    return increase_height
}
