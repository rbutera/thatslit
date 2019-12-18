import * as slug from 'slug'

// thin wrapper for slug with preset options for consistency
function _slug(input: string) {
  return slug(input, { lower: true })
}

export default _slug
