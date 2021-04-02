/* eslint-disable no-alert */
import { Button } from '../Button';
import { Container, Content, Header } from './styles';

function Box(): JSX.Element {
  return (
    <Container>
      <Header>
        <h1>Tell me...</h1>
        <span>Will you need stitches?</span>
      </Header>

      <Content>
        <Button
          onClick={() => {
            alert('Shawn Mendes is crying now!');
          }}
          color="red"
        >
          No, Please!
        </Button>
        <Button onClick={() => alert('Shawn Mendes loves you!')}>
          OMG! Yes!
        </Button>
      </Content>
    </Container>
  );
}

export default Box;
