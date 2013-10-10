// This function calculates the tax according to the given tax-structure and returns the tax
function calculateTax(inc)
    {
        // REPLACE THIS CODE WITH YOUR calculateTax() METHOD
        var tax = 0;
        
        while(inc > 10000){
            if (inc > 40000) {
                tax += (inc - 40000) * 0.3;
                inc = 40000;
            } else if (inc <= 40000 && inc > 20000) {
                tax += (inc - 20000) * 0.2;
                inc = 20000;
            } else {
                tax += (inc - 10000) * 0.1;
                inc = 10000;
            }
        }
        
        return tax;
    }

// This function reads a series of incomes from comma separated values in the string text and then formats the income and tax in a table and returns the string
function incomeList(text)
    {
        var result =[];
        var incomes = text.split(",");
        var taxes = [];
        for(var i=0; i < incomes.length; i++)
        {
            taxes.push(calculateTax(incomes[i]));
            result.push(incomes[i] +","+ taxes[i]);
        }
        return result;
    }