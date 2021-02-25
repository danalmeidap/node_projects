function isNumber(mynumber) {
    return mynumber.constructor == Number;
  }


function get_coins(value)
{
    var coins = 0
    while (value > 0)
    {
        if (value >= 25)
        {
            value -= 25;
        }
        
        else if (value >= 10)
        {
            value -= 10;
        }
    
        else if (value >= 5)
        {
            value -= 5;
        }
    
        else if (value >= 1)
        {
            value -= 1;
        }   
        coins ++;
    }
    return coins;
}


var change_owned = function(value)
{
    if (!(isNumber(value)))
    {
        return "the value must to be a number";
    }
    var counter = 0;
    if (value < 0)
    {
        return "invalid number";
    }
    var coins_counter = get_coins(value);
    return coins_counter;
}
exports.change_owned = change_owned;
