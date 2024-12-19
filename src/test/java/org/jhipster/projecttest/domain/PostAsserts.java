package org.jhipster.projecttest.domain;

import static org.assertj.core.api.Assertions.assertThat;

public class PostAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertPostAllPropertiesEquals(Post expected, Post actual) {
        assertPostAutoGeneratedPropertiesEquals(expected, actual);
        assertPostAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertPostAllUpdatablePropertiesEquals(Post expected, Post actual) {
        assertPostUpdatableFieldsEquals(expected, actual);
        assertPostUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertPostAutoGeneratedPropertiesEquals(Post expected, Post actual) {
        assertThat(expected)
            .as("Verify Post auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertPostUpdatableFieldsEquals(Post expected, Post actual) {
        assertThat(expected)
            .as("Verify Post relevant properties")
            .satisfies(e -> assertThat(e.getTitle()).as("check title").isEqualTo(actual.getTitle()))
            .satisfies(e -> assertThat(e.getContent()).as("check content").isEqualTo(actual.getContent()))
            .satisfies(e -> assertThat(e.getDate()).as("check date").isEqualTo(actual.getDate()));
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertPostUpdatableRelationshipsEquals(Post expected, Post actual) {
        assertThat(expected)
            .as("Verify Post relationships")
            .satisfies(e -> assertThat(e.getBlog()).as("check blog").isEqualTo(actual.getBlog()))
            .satisfies(e -> assertThat(e.getTags()).as("check tags").isEqualTo(actual.getTags()));
    }
}
