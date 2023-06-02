using System.Text.RegularExpressions;

Console.WriteLine("CALCULADOR DE DESCONTOS");
Console.WriteLine("Por conta da Black Friday nossos produtos estão com 60% de desconto!");

string? precoStr;

do
{
    Console.Write("Digite o valor do produto: (ex: 2834.53 ou 10.00) ");
    precoStr = Console.ReadLine();
    precoStr = precoStr.Replace(".", ",");
    precoStr = Regex.Replace(precoStr, "[^0-9,]", "");
}
while (precoStr.Length < 1);

float? precoInicial;
precoInicial = float.Parse(precoStr);
    
float? precoDesconto = precoInicial * 0.4f;
float? valorDesconto = precoInicial - precoDesconto;
string precoDescontoFormatado = precoDesconto.Value.ToString("0.00");
string valorDescontoFormatado = valorDesconto.Value.ToString("0.00");

Console.WriteLine("O produto custava: R$" + precoInicial);
Console.WriteLine("Com o desconto: R$" + precoDescontoFormatado);
Console.WriteLine("Valor do desconto: R$" + valorDescontoFormatado);
Console.WriteLine("Muito obrigado!");
/*No PDF onde recebi o desafio, onde demonstrava as saídas do console, o valor da saída B ficou...
...Invertido com o valor da saída C, ou seja valor do desconto e preço com desconto, caso...
...utilizem os mesmos dados pra testar favor se atentar nesse detalhe. \o/  */

Console.ReadLine();