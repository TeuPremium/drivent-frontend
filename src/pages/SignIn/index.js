import { useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import AuthLayout from '../../layouts/Auth';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import { ImGithub } from 'react-icons/im';
import Link from '../../components/Link';
import { Row, Title, Label } from '../../components/Auth';

import EventInfoContext from '../../contexts/EventInfoContext';
import UserContext from '../../contexts/UserContext';

import useSignIn from '../../hooks/api/useSignIn';
import styled from 'styled-components';
import useGitHubAuth from '../../hooks/api/useGitHubAuth';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loadingSignIn, signIn } = useSignIn();

  const { eventInfo } = useContext(EventInfoContext);
  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();
  const { gitHubAuthURL, code, signInGitHub } = useGitHubAuth();

  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  }

  async function handleLoginGithub() {
    try {
      const userData = await signInGitHub(code);

      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (error) {
      toast('Não foi possível fazer o login!');
    }
  }

  useEffect(() => code && handleLoginGithub(), [code]);

  async function redirectToGitHub() {
    window.location.href = gitHubAuthURL;
  }

  return (
    <AuthLayout background={eventInfo.backgroundImageUrl}>
      <Row>
        <img src={eventInfo.logoImageUrl} alt="Event Logo" width="60px" />
        <Title>{eventInfo.title}</Title>
      </Row>
      <Row>
        <Label>Entrar</Label>
        <form onSubmit={submit}>
          <Input label="E-mail" type="text" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input
            label="Senha"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignIn}>
            Entrar
          </Button>
          <GitHubButton type="button" onClick={() => redirectToGitHub()} fullWidth disabled={loadingSignIn}>
            Entrar com
            <span>
              <ImGithub />
            </span>
          </GitHubButton>
        </form>
      </Row>
      <Row>
        <Link to="/enroll">Não possui login? Inscreva-se</Link>
      </Row>
    </AuthLayout>
  );
}

const GitHubButton = styled.button`
  width: 100%;
  text-transform: uppercase;
  background-color: #24292e;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  height: 36.5px;
  margin-top: 8px;
  padding: 16px 0px;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 14px;
  &:hover {
    opacity: 0.98;
  }
  span {
    font-size: 14px;
    height: 14px;
  }
`;
