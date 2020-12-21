import gql from 'graphql-tag'

export const COTATION_BY_CODE = gql`
query($codActe: String!) {
  cotationByCodActe(codActe: $codActe){
    codActe
    puBase
    apdtModif
    nomLong
  }
}`
