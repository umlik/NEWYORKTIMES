
<script>
    export let data
    const { news } = data
    import "../routes/style.css"
</script>
<ul>
    <li><a href="default.asp">Home</a></li>
    <li><a href="news.asp">News</a></li>
    <li><a href="contact.asp">Contact</a></li>
    <li><a href="about.asp">About</a></li>
  </ul>
<h1>New York Times</h1>
{#each news as newx}
    <h2>{newx.title}</h2>
    {#each newx.multimedia as newsimage }
    {#if newsimage.format === "threeByTwoSmallAt2X"}
    <img src="{newsimage.url}" alt="{newsimage.caption}"/>
    {/if}
    {/each}
    
{/each}

