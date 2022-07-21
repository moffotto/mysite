export type TypeCommonProps = {
  id?: string;
  className?: string;
};

export type TypePositioningProps = {
  justifyContent?:
    | 'left'
    | 'right'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'safe center'
    | 'unsafe center'
    | 'revert'
    | 'revert-layer'
    | 'unset'
    | 'normal';
  justifyItems?:
    | 'left'
    | 'right'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'safe center'
    | 'unsafe center'
    | 'revert'
    | 'revert-layer'
    | 'unset'
    | 'normal';
  alignItems?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit';
  alignContent?:
    | 'stretch'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit';
};
