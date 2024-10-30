import React from 'react';
import { TitleLevelEnum } from '../enums/title-level-enum';
import { TitleSizeEnum } from '../enums/title-size-enum';
import { ReactNode } from 'react';

export interface UiTitleComponentInterface extends React.ComponentProps<'h1'> {
  level?: keyof typeof TitleLevelEnum;
  size?: keyof typeof TitleSizeEnum;
  children?: ReactNode;
}