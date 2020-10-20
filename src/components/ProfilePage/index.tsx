import React from 'react'

import Feed from '../Feed'

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Legolas Greenleaf</h1>
        <h2>@Prince of the Woodland Realm</h2>

        <p>
        Anspirant to programming <a href="https://github.com.br">@javascript</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Middle-earth, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 25 de janeiro de 1993
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>30</strong>
          </span>
          <span>
            <strong>102</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  )
}

export default ProfilePage