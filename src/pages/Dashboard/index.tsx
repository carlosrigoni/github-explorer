import React from "react";
import { FiChevronRight } from "react-icons/fi";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img
        src="https://xesque.rocketseat.dev/platform/1587379765556-attachment.svg"
        alt="Github Explorer"
      />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/59850567?s=460&u=819f257eda77db7a04f48087000bd6124dd65116&v=4"
            alt="Carlos Daniel"
          />
          <div>
            <strong>danrigoni/free-livros</strong>
            <p>
              A Free Livros mantido pela comunidade oferece e-books de
              programação totalmente gratuitos, pois acredita que o conhecimento
              e a educação devem ser livre para todos.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/59850567?s=460&u=819f257eda77db7a04f48087000bd6124dd65116&v=4"
            alt="Carlos Daniel"
          />
          <div>
            <strong>danrigoni/free-livros</strong>
            <p>
              A Free Livros mantido pela comunidade oferece e-books de
              programação totalmente gratuitos, pois acredita que o conhecimento
              e a educação devem ser livre para todos.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/59850567?s=460&u=819f257eda77db7a04f48087000bd6124dd65116&v=4"
            alt="Carlos Daniel"
          />
          <div>
            <strong>danrigoni/free-livros</strong>
            <p>
              A Free Livros mantido pela comunidade oferece e-books de
              programação totalmente gratuitos, pois acredita que o conhecimento
              e a educação devem ser livre para todos.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
