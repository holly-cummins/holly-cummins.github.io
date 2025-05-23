import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";

import Article from "../components/Article";
import Search from "../components/Search";
import Seo from "../components/Seo";

import AlgoliaIcon from "!svg-react-loader!../images/svg-icons/search-by-algolia.svg?name=AlgoliaLogo";

const SearchPage = props => {

  const {
    data: {
      site: {
        siteMetadata: { algolia }
      }
    }
  } = props;

  return (
    <React.Fragment>
      <Article>
        <div className="icon">
          <AlgoliaIcon />
        </div>

        <Search algolia={algolia} />
      </Article>

      <Seo />

      {/* --- STYLES --- */}
      <style jsx>{`
        .icon {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 20px;
        }

        .icon :global(svg) {
          height: 30px;
        }
      `}</style>
    </React.Fragment>
  );
};

SearchPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default SearchPage;

// eslint-disable-next-line no-undef
export const query = graphql`
  query SearchQuery {
    site {
      siteMetadata {
        algolia {
          appId
          searchOnlyApiKey
          indexName
        }
      }
    }
  }
`;
