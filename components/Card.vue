<template>
  <article class="card">
    <header class="card__header">
      <h2 class="card__title"></h2>
      <h3 class="card__salary"></h3>
    </header>
    <div class="card__body">
      <h3 class="card__company"></h3>
      <div class="card__requirements">
        <span class="card__requirements_item"></span>
        <span class="card__requirements_item"></span>
        <span class="card__requirements_item"></span>
      </div>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  margin: 0 10px 10px 0;
  padding-left: 10px;
  border-radius: 6px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 5px 0 rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.07), 0 3px 7px 0 rgba(0, 0, 0, 0.06);
  }

  &__header {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    color: $black;
    overflow: hidden;
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (min-width: 768px) {
      font-size: 16px;
      padding-right: 5px;
    }
  }

  &__salary {
    color: rgb(30, 198, 108);
    overflow: hidden;
    font-size: 12px;
    line-height: 23px;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (min-width: 768px) {
      font-size: 16px;
      padding-right: 5px;
    }
  }

  &__company {
    color: $grey;
    font-size: 11px;
    white-space: nowrap;
  }

  &__requirements {
    display: none;

    @media (min-width: 768px) {
      display: flex;

      &_item {
        color: $grey;
        height: 22px;
        display: inline-block;
        padding: 0 7px;
        overflow: hidden;
        font-size: 11px;
        min-width: 20px;
        line-height: 20px;
        margin-left: 6px;
        white-space: nowrap;
        border: 1px solid $grey;
        border-radius: 11px;
        text-overflow: ellipsis;
        text-transform: lowercase;
      }
    }
  }
}
</style>
