// attributes
const SEARCHABLE_ATTR = "searchableAttributes";
const FACETS_ATTR = "attributesForFaceting";
const UNRETRIEVABLE_ATTR = "unretrievableAttributes";
const RETRIEVABLE_ATTR = "attributesToRetrieve";
//ranking
const MODE = "mode";
const RANKING = "ranking";
const CUSTOM_RANKING = "customRanking";
const RELEVANCY_STRICTNESS = "relevancyStrictness";
const REPLICAS = "replicas";
// faceting
const MAX_VALUES_PER_FACET = "maxValuesPerFacet";
const SORT_FACET_VALUES_BY = "sortFacetValuesBy";
// highlighting and snippet
const ATTR_TO_HIGHLIGHT = "attributesToHighlight";
const ATTR_TO_SNIPPET = "attributesToSnippet";
const HIGHLIGHT_PRE_TAG = "highlightPreTag";
const HIGHLIGHT_POST_TAG = "highlightPostTag";
const SNIPPET_ELLIPSIS_TEXT = "snippetEllipsisText";
const RESTRICT_HIGHLIGHT_AND_SNIPPET_ARRAYS =
  "restrictHighlightAndSnippetArrays";
// pagination
const HITS_PER_PAGE = "hitsPerPage";
const PAGINATION_LIMITED_TO = "paginationLimitedTo";
// typos
const MIN_WORD_SIZE_FOR1_TYPO = "minWordSizefor1Typo";
const MIN_WORD_SIZE_FOR2_TYPO = "minWordSizefor2Typo";
const TYPO_TOLERANCE = "typoTolerance";
const ALLOW_TYPOS_ON_NUMERIC_TOKENS = "allowTyposOnNumericTokens";
const DISABLE_TYPO_TOLERANCE_ON_ATTR = "disableTypoToleranceOnAttributes";
const DISABLE_TYPO_TOLERANCE_ON_WORDS = "disableTypoToleranceOnWords";
const SEPARATORS_TO_INDEX = "separatorsToIndex";
// languages
const IGNORE_PLURALS = "ignorePlurals";
const ATTR_TO_TRANS = "attributesToTransliterate";
const REM_STOP_WORDS = "removeStopWords";
const CAMEL_CASE_ATTR = "camelCaseAttributes";
const DECOMP_ATTR = "decompoundedAttributes";
const KEEP_DIACRITICS = "keepDiacriticsOnCharacters";
const CUST_NORMALIZATION = "customNormalization";
const QUERY_LANG = "queryLanguages";
const INDEX_LANG = "indexLanguages";
const DECOMP_QUERY = "decompoundQuery";
// rules
const ENABLE_RULES = "enableRules";
// personalization
const ENABLE_PERSONALIZATION = "enablePersonalization";
// query strategy
const QUERY_TYPE = "queryType";
const REM_WORDS_IF_NO_RESULT = "removeWordsIfNoResults";
const ADV_SYNTAX = "advancedSyntax";
const OPT_WORDS = "optionalWords";
const DISABLE_PREFIX_ON_ATTR = "disablePrefixOnAttributes";
const DISABLE_EXTACT_ON_ATTR = "disableExactOnAttributes";
const EXTACT_ON_SINGLE_WORD_QUERY = "exactOnSingleWordQuery";
const ALT_AS_EXACT = "alternativesAsExact";
const ADV_SYNTAX_FEATURES = "advancedSyntaxFeatures";
// performance
const NUM_ATTR_FILTERING = "numericAttributesForFiltering";
const ALLOW_INT_ARR_COMPRESSION = "allowCompressionOfIntegerArray";
// advanced
const ATTR_FOR_DISTINCT = "attributeForDistinct";
const DISTINCT = "distinct";
const REP_SYNONYMS_HIGHLIGHTS = "replaceSynonymsInHighlight";
const MIN_PROXIMITY = "minProximity";
const RESP_FIELDS = "responseFields";
const MAX_FACET_HITS = "maxFacetHits";
const ATTR_CRITERIA_COMPUTED_NY_MIN_PROXIMITY =
  "attributeCriteriaComputedByMinProximity";
const USER_DATA = "userData";
const RENDERING_CONTENT = "renderingContent";

const SETTINGS_KEYS = [
  SEARCHABLE_ATTR,
  FACETS_ATTR,
  UNRETRIEVABLE_ATTR,
  RETRIEVABLE_ATTR,
  RELEVANCY_STRICTNESS,
  MODE,
  RANKING,
  CUSTOM_RANKING,
  RELEVANCY_STRICTNESS,
  REPLICAS,
  // faceting
  MAX_VALUES_PER_FACET,
  SORT_FACET_VALUES_BY,
  // highlighting and snippet
  ATTR_TO_HIGHLIGHT,
  ATTR_TO_SNIPPET,
  HIGHLIGHT_PRE_TAG,
  HIGHLIGHT_POST_TAG,
  SNIPPET_ELLIPSIS_TEXT,
  RESTRICT_HIGHLIGHT_AND_SNIPPET_ARRAYS,
  // pagination
  HITS_PER_PAGE,
  PAGINATION_LIMITED_TO,
  // typos
  MIN_WORD_SIZE_FOR1_TYPO,
  MIN_WORD_SIZE_FOR2_TYPO,
  TYPO_TOLERANCE,
  ALLOW_TYPOS_ON_NUMERIC_TOKENS,
  DISABLE_TYPO_TOLERANCE_ON_ATTR,
  DISABLE_TYPO_TOLERANCE_ON_WORDS,
  SEPARATORS_TO_INDEX,
  // languages
  IGNORE_PLURALS,
  ATTR_TO_TRANS,
  REM_STOP_WORDS,
  CAMEL_CASE_ATTR,
  DECOMP_ATTR,
  KEEP_DIACRITICS,
  CUST_NORMALIZATION,
  QUERY_LANG,
  INDEX_LANG,
  DECOMP_QUERY,
  // rules
  ENABLE_RULES,
  // personalization
  ENABLE_PERSONALIZATION,
  // query strategy
  QUERY_TYPE,
  REM_WORDS_IF_NO_RESULT,
  ADV_SYNTAX,
  OPT_WORDS,
  DISABLE_PREFIX_ON_ATTR,
  DISABLE_EXTACT_ON_ATTR,
  EXTACT_ON_SINGLE_WORD_QUERY,
  ALT_AS_EXACT,
  ADV_SYNTAX_FEATURES,
  // performance
  NUM_ATTR_FILTERING,
  ALLOW_INT_ARR_COMPRESSION,
  // advanced
  ATTR_FOR_DISTINCT,
  DISTINCT,
  REP_SYNONYMS_HIGHLIGHTS,
  MIN_PROXIMITY,
  RESP_FIELDS,
  MAX_FACET_HITS,
  ATTR_CRITERIA_COMPUTED_NY_MIN_PROXIMITY,
  USER_DATA,
  RENDERING_CONTENT,
];

module.exports = { SETTINGS_KEYS };
