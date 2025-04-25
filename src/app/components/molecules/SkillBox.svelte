<script lang="ts">
  import ProgressBar from './../atoms/ProgressBars/ProgressBar.svelte';
  import IconWrapper from "../atoms/Buttons/IconWrapper.svelte";
  import Text from "../atoms/Text/Text.svelte";
  import Tag from "../atoms/Buttons/Tag.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";
  import { TextColorVariant } from "../../types/variants";
  import { type Skill } from '../../content/skills';
  import { JustifyContent, AlignItems, FlexDirection, FlexWrap, FontWeight, Size, Align } from '../../types/styles';
  import Span from '../atoms/Text/Span.svelte';
  import { language, type Language } from "../../stores/language"; 

  /* ATTRIBUTES */
  export let skill: {[key in Language]: Skill} ;

  /* HOOKS */
  $: skillContent = skill[$language];
</script>

<div class={`SkillBox SkillBox--${skill}`}>
  <Flex direction={FlexDirection.ROW} justify={JustifyContent.START} gap={2}>
      <IconWrapper icon={skillContent.icon} isButton={false} />
    <Text color={TextColorVariant.BLACK} align={Align.LEFT} fontWeight={FontWeight.MEDIUM}>{skillContent.title}</Text>
  </Flex>
  {#if skillContent.title === 'Languages' || skillContent.title === 'Języki'}
    <Flex direction={FlexDirection.COLUMN} align={AlignItems.START} gap={0.5}>
      {#each Object.values(skillContent.skills) as specificSkill}
        <Flex direction={FlexDirection.COLUMN} align={AlignItems.START} gap={0.5}>
            <Flex direction={FlexDirection.ROW} justify={JustifyContent.START} gap={1}>
                <Span size={Size.SMALL} fontWeight={FontWeight.MEDIUM}>{specificSkill.title}</Span>
                <Span size={Size.SMALL} fontWeight={FontWeight.REGULAR}>|</Span>
                <Span size={Size.SMALL} fontWeight={FontWeight.REGULAR}>{specificSkill.level}</Span>
            </Flex>
          <ProgressBar value={specificSkill.procent} />
        </Flex>
      {/each}
    </Flex>
  {:else if Array.isArray(skillContent.skills)}
    <Flex direction={FlexDirection.ROW} justify={JustifyContent.START} gap={0.5} wrap={FlexWrap.WRAP}>
      {#each skillContent.skills as specificSkill}
        <Tag>{specificSkill}</Tag>
      {/each}
    </Flex>
  {/if}
</div>

<style>
  .SkillBox {
    background-color: var(--color-primary-white);
    padding: 2rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    height: 100%;
    border-radius: 3rem;
    box-shadow: var(--box-shadow-small-white);
  }

  /* .SkillBox--lacking i {
    background-color: var(--color-primary-white);
    padding: 2rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    height: auto;
    border-radius: var(--border-radius-small);
  } */
</style>
