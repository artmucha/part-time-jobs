<template>
  <div class="container">
    <article class="post">
      <header class="post__header">
        <div>
          <div>
            <h2 class="post__title">Front-end Developer</h2>
            <time class="post__date" datetime="12.02.2021">
              Dodano: 12.02.2021
            </time>
          </div>
          <div class="post__salary">
            <span>50</span> - <span>100</span> PLN / godzina
          </div>
        </div>
        <div>
          <h3 class="post__category"><span>Kategoria:</span> JavaScript</h3>
          <h3 class="post__experience"><span>Doświadczenie:</span> Senior</h3>
        </div>
      </header>
      <div class="post__body">
        <h3 class="post__subtitle">Wymagania</h3>
        <div class="post__requirements">
          <span class="post__requirements_item">javascript</span>
          <span class="post__requirements_item">react</span>
          <span class="post__requirements_item">vuejs</span>
          <span class="post__requirements_item">git</span>
        </div>
      </div>
      <div class="post__body post__details">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </div>
      <div class="post__body">
        <h4>
          Wyślij CV: <a href="mailto: email@example.com">email@example.com</a>
        </h4>
      </div>
    </article>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 15px;
}

.post {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 6px;
  background-color: $white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 5px 0 rgba(0, 0, 0, 0.04);

  @media (min-width: 768px) {
    &__header {
      & > div {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  &__title {
    font-size: 28px;
  }

  &__subtitle {
    margin-bottom: 10px;
  }

  &__date {
    font-size: 14px;
    font-weight: 400;
    color: $grey;
  }

  &__category,
  &__experience {
    margin-top: 10px;
    font-size: 16px;
    span {
      color: $grey;
      font-weight: 400;
    }
  }

  &__body {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid $grey;
  }

  &__salary {
    margin-top: 10px;
    color: rgb(30, 198, 108);
    overflow: hidden;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (min-width: 768px) {
      margin-top: 0;
      font-size: 24px;
    }
  }

  &__requirements {
    display: flex;

    &_item {
      color: $grey;
      height: 26px;
      display: inline-block;
      padding: 0 7px;
      overflow: hidden;
      font-size: 14px;
      min-width: 20px;
      line-height: 24px;
      margin-right: 6px;
      white-space: nowrap;
      border: 1px solid $grey;
      text-overflow: ellipsis;
      text-transform: lowercase;
    }
  }
}
</style>
