CREATE TABLE produto (
  id_produto INT IDENTITY(1,1) PRIMARY KEY,
  nome_produto VARCHAR(50) NOT NULL,
  valor_produto DECIMAL(10,2) NOT NULL
);

CREATE TABLE pedido (
  id_pedido INT IDENTITY(1,1) PRIMARY KEY,
  nome_cliente VARCHAR(50) NOT NULL,
  data_pedido datetime DEFAULT GETDATE(),
  valor_pedido DECIMAL(10,2),
  id_produto INT,
  quantidade_produto INT NOT NULL,
  FOREIGN KEY (id_produto) REFERENCES produto(id_produto)
);
CREATE TRIGGER atualizar_valor_pedido
ON pedido
AFTER INSERT
AS
BEGIN
    UPDATE pedido
    SET valor_pedido = produto.valor_produto * pedido.quantidade_produto
    FROM pedido
    JOIN produto ON pedido.id_produto = produto.id_produto
    WHERE pedido.id_pedido IN (SELECT id_pedido FROM inserted)
END;