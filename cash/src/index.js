var change_owned = function(value)
{
    var counter = 0;
    while (value > 0)
    {
        if (value >= 25)
        {
            value -= 25;
            counter ++;
        }
        
        else if (value >= 10)
        {
            value -= 10;
            counter ++;
        }
    
        else if (value >= 5)
        {
            value -= 5;
            counter ++;
        }
    
        else if (value >= 1)
        {
            value -= 1;
            counter ++;
        }   

    }
    return counter;
}
exports.change_owned = change_owned;
